import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res
          .status(429)
          .json({ message: "Rate limit exceeded. Please try again later" });
      }
     else if (decision.reason.isBot()) {
      return res.status(403).json({ message: "Bot access denied." });
    } else {
      return res
        .status(403) 
        .json({ message: "Access Denied By Security Policy." });
    }
    }

    if(decision.results.some(isSpoofedBot)){
        return res.status(403).json({
            error: "Spooefed bot detected.",
            message: "Malicious bot activity detected.",
        });
    }

    if (req.ip === "127.0.0.1") return next();
    if (process.env.NODE_ENV !== "production") return next();

    next();
  } catch (error) {
    console.log("Arcjet Protection Error :", error);
    next();
  }
};
