const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "token is required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
}

module.exports = authMiddleware;
