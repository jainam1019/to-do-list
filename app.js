const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var item=["Buy food","Cook Food","Eat food"];
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  var today  = new Date();
  var day=today.toLocaleDateString("en-US", options);

  res.render('list', {curDate: day, newListItem: item});
});

app.post("/", function(req,res){
  item.push(req.body.newItem);
  res.redirect("/");
})




app.listen(3000, function() {
  console.log("The server started running on port 3000 at " + Date());
});
