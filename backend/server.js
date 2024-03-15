import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000; 

app.get("/", (req, res) => {
    // root route http:://localhost:5000/
    res.send("Hello World, today!");
});

// Doing all the separate authentication routes is messy and will get cluttered so we will condense them into categories sorted by their root directory
app.use("/api/auth", authRoutes) // Auth routes are called from the auth routes file whenever this path is followed

// // 3 Authentication routes
// app.get("/api/auth/signup", (req, res) => {
//     console.log("signup route");
// });

// app.get("/api/auth/login", (req, res) => {
//     console.log("login route");
// });

// app.get("/api/auth/logout", (req, res) => {
//     console.log("logout route");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
}

);
