const express = require("express"),
      app = express(),
	  path = require('path'),
	  router = express.Router();

//important for heroku deployment. Goorm uses 3000 or DATABASEURL environment variable. Heroku uses PORT.
const PORT = process.env.PORT || 3000 || process.env.DATABASEURL;

//middleware dependencies
app.use('/public', express.static('public'));

router.get("/", function(req, res){
	res.sendFile("./public/index.html", { root: __dirname });
});

router.get("/circles.html", function(req, res){
	res.sendFile("./public/circles.html", { root: __dirname });
});

router.get("/colorGame.html", function(req, res){
	res.sendFile("./public/colorGame.html", { root: __dirname });
});

router.get("/museumofcandy.html", function(req, res){
	res.sendFile("./public/museumofcandy.html", { root: __dirname });
});

app.use("/", router);

/*for use with heroku*/
app.listen(PORT, function(){
	console.log("Portfolio is running on port " + PORT);
});