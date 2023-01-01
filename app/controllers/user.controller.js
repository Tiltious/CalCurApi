const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  //res.status(200).send("Public Content.");
  User.find({}).exec((err,res1)=>res.json(res1));
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
