const mongoose = require("mongoose");
const url = process.env.DATABASE_URI || "mongodb://localhost/todo-api";

mongoose.set("debug", true);
mongoose.Promise = Promise;

// Deprecation handling
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(url, {
	keepAlive: true,
});

module.exports.Todo = require("./todo");
