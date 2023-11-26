const express = require("express");
const router = new express.Router();
const Friends = require("../../models/FriendsSchema");
const Group = require("../../models/groupSchema");

// route to create group of friends
router.post("/createGroup", async (req, res) => {
  try {
    const loggedInUser = req.loggedInUser;
    const { name, friends } = req.body;
    var group = await Group.findOne({ user: loggedInUser._id });
    if (group) {
      group.group.push({ name, friends });
    } else {
      group = new Group({
        user: loggedInUser._id,
        group: [{ name, friends }],
      });
    }
    const createdGroup = await group.save();
    res.status(201).json({
      message: "group created successful",
      success: true,
      group: createdGroup,
    });
  } catch (error) {
    console.error("Error creating group", error);
    res.status(500).json({ success: false, error: "Failed to create group" });
  }
});

// add friends array to group
router.post("/addFriendToGroup", async (req, res) => {
  try {
    const loggedInUser = req.loggedInUser;
    //here friends is an array of objects
    const { name, friends } = req.body;
    const group = await Group.findOne({ user: loggedInUser._id });
    // find group whose friend need to be altered
    const groupIndex = group.group.findIndex((group) => group.name === name);
    console.log(groupIndex)
    // add friends to group
    group.group[groupIndex].friends = [ ...group.group[groupIndex].friends, ...friends];
    await group.save();
    res.status(200).json({
      message: "add friend to group successful",
      success: true,
      group: group,
    });
  } catch (error) {
    console.error("Error adding friend to group", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to add friend to group" });
  }
});

// route to get all groups
router.get("/getGroups", async (req, res) => {
  try {
    const loggedInUser = req.loggedInUser;
    const groups = await Group.findOne({ user: loggedInUser._id });
    res.status(200).json({
      message: "get groups successful",
      success: true,
      groups: groups,
    });
  } catch (error) {
    console.error("Error getting groups", error);
    res.status(500).json({ success: false, error: "Failed to get groups" });
  }
});

// route to delete group
router.delete("/deleteGroup", async (req, res) => {
  try {
    const loggedInUser = req.loggedInUser;
    const { name } = req.body;
    const group = await Group.findOne({ user: loggedInUser._id });
    group.group = group.group.filter((group) => group.name !== name);
    await group.save();
    res.status(200).json({
      message: "delete group successful",
      success: true,
      group: group,
    });
  } catch (error) {
    console.error("Error deleting group", error);
    res.status(500).json({ success: false, error: "Failed to delete group" });
  }
});

// route to update group
router.put("/updateGroup", async (req, res) => {
  try {
    const loggedInUser = req.loggedInUser;
    const { name, friends } = req.body;
    const group = await Group.findOne({ user: loggedInUser._id });
    group.group = group.group.map((group) => {
      if (group.name === name) {
        group.friends = friends;
      }
      return group;
    });
    await group.save();
    res.status(200).json({
      message: "update group successful",
      success: true,
      group: group,
    });
  } catch (error) {
    console.error("Error updating group", error);
    res.status(500).json({ success: false, error: "Failed to update group" });
  }
});

//get only group names
router.get("/getGroupNames", async (req, res) => {
  try {
    const loggedInUser = req.loggedInUser;
    const groups = await Group.findOne({ user: loggedInUser._id });
    const groupNames = groups.group.map((group) => group.name);
    res.status(200).json({
      message: "get group names successful",
      success: true,
      groupNames: groupNames,
    });
  } catch (error) {
    console.error("Error getting group names", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to get group names" });
  }
});

module.exports = router;

