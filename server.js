//jshint esversion:6
const express = require("express");
const app = express();
app.get("/", function(req, res){
  res.send("<h1>Hello, world!</h1>");
});
app.get("/contact", function(req, res){
  res.send("Contact me @: [INSERT EMAIL HERE]@gmail.com");
});
app.get("/about", function(req, res){
  res.send("Hello, my name is Enrique and I love Web Development!");
});
app.get("/hobbies", function(req, res){
  res.send("<ul> <li>Soccer</li> <li>Watching Documentaries</li> <li>Learning</li> </ul>");
});
app.listen(3000, function(){
  console.log("server started on port 3000");
});
