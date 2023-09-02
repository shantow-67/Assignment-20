const jwt = require("jsonwebtoken");
const customError = require("../utils/customeError");
const { JWT_PASSWORD } = require("../../secret");

const authenticate = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    // checking token exists or not
    if (!token) throw customError("unauthorized", 401);
    // token validation check
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, JWT_PASSWORD);

    // find user in my user collection
    const user = await findUserByProperty("email", decoded.email);
    if (!user) throw customError("invalid token", 401);

    // forward to next middleware
    req.headers.email = user.email;
    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
};

module.exports = authenticate;
