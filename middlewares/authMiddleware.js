const jwt = require('jsonwebtoken');
const User = require('../model/usermodel');

class Authenticate {
  async authenticate(req, res, next) {
    const token = req.header('token');

    if (!token) return res.status(401).send({ success: false, message: 'Access Denied: Token not provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id);
    if (!user) return res.status(404).send({ success: false, message: 'user not found or might have been deleted' });

    req.auth = user;

    return next();
  }
}


module.exports = new Authenticate();