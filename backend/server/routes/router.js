const express = require("express");
const route = require("express").Router();

const services = require("../services/render");

//here we are including controller module to use api
var controller = require("../controller/controller");

route.get("/", services.homeroutes);

route.get("/add-user", services.add_user);

route.get("/update-user", services.update_user);

//===================================API========================================================================
//when we get POST req for PATH:api/users, then we just need to call create() from controller.js
route.post("/api/users", controller.create);

//when we get GET req for PATH:api/users, then we just need to call FIND() from controller.js
route.get("/api/users", controller.find);

//when we get PUT req for PATH:api/users/:id, then we just need to call update() from controller.js
route.put("/api/users/:id", controller.update);

//when we get DELETE req for PATH:api/users/:id, then we just need to call delete() from controller.js
route.delete("/api/users/:id", controller.delete);

module.exports = route;
