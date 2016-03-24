console.log("in config mongoose");
var mongoose = require("mongoose");
var fs = require("fs");
var path = require("path");

mongoose.connect("mongodb://localhost/discussion_board");

var models_path = path.join(__dirname, "/../models");

fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf(".js") ) {
		require(models_path + "/" + file);
	}
});