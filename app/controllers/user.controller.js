const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  //res.status(200).send("Public Content.");
  const data = User.find({}).exec((err,res1)=>res.json(res1));
  console.log(data);
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
