const db = require("../models");

/* GET todos list */
exports.getTodos = function (req, res, next) {
	db.Todo.find()
		.then(function (todos) {
			res.json(todos);
		})
		.catch(function (err) {
			res.send(err);
		});
};

/* POST a new todo */
/* Must use x-www-form-urlencoded in POSTMAN for testing */
exports.createTodo = function (req, res) {
	console.log(req.body);
	db.Todo.create(req.body)
		.then(function (newTodo) {
			res.status(201).json(newTodo);
		})
		.catch(function (err) {
			res.send(err);
		});
};

/* GET/SHOW a single todo */
exports.getTodo = function (req, res) {
	db.Todo.findById(req.params.todoId)
		.then(function (foundTodo) {
			res.json(foundTodo);
		})
		.catch(function (err) {
			res.send(err);
		});
};

/* PUT/UPDATE a single todo */
exports.updateTodo = function (req, res) {
	db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
		.then(function (todo) {
			res.json(todo);
		})
		.catch(function (err) {
			res.send(err);
		});
};

/* DELETE a single todo */
exports.deleteTodo = function (req, res) {
	db.Todo.remove({ _id: req.params.todoId })
		.then(function () {
			res.json({ message: "We deleted it!" });
		})
		.catch(function (err) {
			res.send(error);
		});
};

module.exports = exports;
