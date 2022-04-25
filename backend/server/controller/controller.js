const { rawListeners } = require("../model/model");
var Userdb = require("../model/model");

//create new user and push into DB
exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "content cannot be empty" });
    return res;
  }

  var user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a create operation",
      });
    });
};

exports.find = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
