import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const verifyToken = async (req, res, next) => {
  try {
    // Check for the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return next(createError(401, "Authorization header is missing!"));
    }

    // Extract the token from the header
    const token = authHeader.split(" ")[1]; // Format: "Bearer <token>"
    if (!token) {
      return next(createError(401, "Token is missing in the Authorization header!"));
    }

    // Verify the token
    jwt.verify(token, process.env.JWT, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return next(createError(401, "Token has expired!"));
        }
        if (err.name === "JsonWebTokenError") {
          return next(createError(403, "Invalid token!"));
        }
        return next(createError(403, "Could not verify token!"));
      }

      // Attach decoded token data to the request object
      req.user = decoded;
      next();
    });
  } catch (err) {
    console.error("Error verifying token:", err);
    next(err); // Pass unexpected errors to the global error handler
  }
};
