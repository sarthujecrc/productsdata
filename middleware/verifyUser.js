const User = require("../models/User.js");

function verifyRole(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      return next();
    }
    return res.status(403).json({ message: "unauthrosied users" });
  };
}

module.exports = { verifyRole };
