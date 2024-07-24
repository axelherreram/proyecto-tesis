const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profile_pictures'); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

const register = async (req, res) => {
  const { email, password, roleid, yearid } = req.body;
  const profileImage = req.file ? req.file.path : null;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ 
      email, 
      password: hashedPassword,
      profileImage,
      roleid,
      yearid
    });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user.userid }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ 
      message: 'Login successful', 
      email: user.email,
      profileImage: user.profileImage,
      token
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
};

const updateUser = async (req, res) => {
  const { email, newEmail, newPassword, newRoleId, newYearId } = req.body;
  const newProfileImage = req.file ? req.file.path : null;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (newEmail) {
      user.email = newEmail;
    }
    if (newPassword) {
      user.password = await bcrypt.hash(newPassword, 10);
    }
    if (newRoleId) {
      user.roleid = newRoleId;
    }
    if (newYearId) {
      user.yearid = newYearId;
    }
    if (newProfileImage) {
      user.profileImage = newProfileImage;
    }

    await user.save();

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login, logout, updateUser, upload };
