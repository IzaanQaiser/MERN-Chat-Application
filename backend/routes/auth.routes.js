import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("Signup Route");
});

router.get("/login", (req, res) => {
    res.send("Login Route");
});

router.get("/Logout", (req, res) => {
    res.send("Logout Route");
});

export default router;