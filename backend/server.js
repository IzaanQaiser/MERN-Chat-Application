import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000; 

app.get("/", (req, res) => {
    // root route http:://localhost:5000/
    res.send("Hello World, today!");
});

// 3 Authentication routes
app.get("/api/auth/signup", (req, res) => {
    console.log("signup route");
});

app.get("/api/auth/login", (req, res) => {
    console.log("login route");
});

app.get("/api/auth/logout", (req, res) => {
    console.log("logout route");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
