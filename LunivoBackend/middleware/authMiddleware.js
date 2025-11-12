import jwt from "jsonwebtoken";

// export const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   // Token must be sent in headers → Authorization: Bearer <token>
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Access denied. No token provided." });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // attach user info to request for later use
//     next();
//   } catch (error) {
//     console.error("Token verification failed:", error);
//     res.status(403).json({ message: "Invalid or expired token." });
//   }
// };

// const verifyToken = (req, res, next) => {
//     const token=req.headers.authorization;
//     const [first,authToken]=token.split(" ");

//     if(first!=='JWT'){
//         return res.status(401).json({message:"Access denied. Invalid token format."});
//     }
//     if(!authToken){
//         return res.status(401).json({message:"Access denied. No token provided."});
//     }
//         jwt.verify(authToken,process.env.JWT_SECRET,(err,decode) => {
//             if(err){
//                 if("expiry error"){
//                     jwt.verify(refreshToken,process.env.JWT_SECRET,(err,decode) => {
//                         if(err){
//                             return res.status(403).json({message:"Invalid or expired token."});
//                         }
//                         // Issue new token
//                         const newToken=jwt.sign(
//                             {
//                                 id:decode.id,
//                                 email:decode.email
//                             },
//                             process.env.JWT_SECRET,
//                             {expiresIn:"1d"}
//                         );
//                         res.setHeader("Authorization","JWT "+newToken);
//                         next();
//                     })
//                 }
//                 return res.status(403).json({message:"Invalid or expired token."});
//             }
//             // req.user=decoded;
//             next();
//         });

//     }
