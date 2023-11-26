const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");
const Friends = require("../../models/FriendsSchema");



//rooute add Friend
router.post("/addFriend", async (req, res) => {
    try {
        const loggedInUser = req.loggedInUser;
        const { email, name } = req.body;
        const friend = new Friends({ user: loggedInUser._id, friends: [{ email, name }] });
        const createdFriend = await friend.save();
        res.status(201).json({
            message: "friend added successful",
            success: true,
            friend: createdFriend,
        });
    } catch (error) {
        console.error("Error creating friend", error);
        res.status(500).json({ success: false, error: "Failed to create friend" });
    }
});

//route get all friends
router.get("/getFriends", async (req, res) => {
    try {
        const loggedInUser = req.loggedInUser;
        const friends = await Friends.findOne({ user: loggedInUser._id });
        res.status(200).json({
            message: "get friends successful",
            success: true,
            friends: friends,
        });
    } catch (error) {
        console.error("Error getting friends", error);
        res.status(500).json({ success: false, error: "Failed to get friends" });
    }
});

//route delete friend
router.delete("/deleteFriend", async (req, res) => {
    try {
        const loggedInUser = req.loggedInUser;
        const { email } = req.body;
        const friend = await Friends.findOne({ user: loggedInUser._id });
        friend.friends = friend.friends.filter((friend) => friend.email !== email);
        await friend.save();
        res.status(200).json({
            message: "delete friend successful",
            success: true,
            friend: friend,
        });
    } catch (error) {
        console.error("Error deleting friend", error);
        res.status(500).json({ success: false, error: "Failed to delete friend" });
    }
});

//route update friend
router.put("/updateFriend", async (req, res) => {
    try {
        const loggedInUser = req.loggedInUser;
        const { email, name } = req.body;
        const friend = await Friends.findOne({ user: loggedInUser._id });
        friend.friends = friend.friends.map((friend) => {
            if (friend.email === email) {
                friend.name = name;
            }
            return friend;
        });
        await friend.save();
        res.status(200).json({
            message: "update friend successful",
            success: true,
            friend: friend,
        });
    } catch (error) {
        console.error("Error updating friend", error);
        res.status(500).json({ success: false, error: "Failed to update friend" });
    }
});



module.exports = router;