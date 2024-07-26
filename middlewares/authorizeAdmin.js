const jwt = require('jsonwebtoken');

const authorizeAdmin = (req, res, next) => {
    if (req.user.roleid !== 1) {  // Verifica si el roleid es 1 para administrador
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
  
module.exports = authorizeAdmin;
  