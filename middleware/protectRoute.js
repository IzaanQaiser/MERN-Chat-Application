import jwt from "jsonwebtoken";
import User from "../backend/models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded){
        return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password")

    if (!user){
        return res.status(404).json({error: "User not found"})
    }

    req.user = user;
    next(); // Runs the function after this function is called assuming all tests are passed

  } catch (error) {
    console.log("Error in protectRoute Middleware: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute; 