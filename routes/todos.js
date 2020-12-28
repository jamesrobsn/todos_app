const express = require("express");
const router = express.Router();
const db = require("../models");
const helpers = require("../helpers/todos");

/* GET todos list */
/* POST a new todo */
/* Must use x-www-form-urlencoded in POSTMAN for testing */
router.route("/").get(helpers.getTodos).post(helpers.createTodo);

/* GET/SHOW a single todo */
/* PUT/UPDATE a single todo */
/* DELETE a single todo */
router
	.route("/:todoId")
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo);

module.exports = router;
