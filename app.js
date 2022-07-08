const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let item=["Buy food","Cook Food","Eat food"];
let workItem=[];
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  let options = { weekday: 'long', month: 'long', day: 'numeric' };
  let today  = new Date();
  let day=today.toLocaleDateString("en-US", options);

  res.render('list', {listTitle: day, newListItem: item});
});

app.post("/", function(req,res){
  item.push(req.body.newItem);
  res.redirect("/");
  console.log(req.body);
})

app.get("/work", function(req,res){
  res.render('list',{listTitle:"Work List", newListItem:workItem});

})

app.post("/work", function(){
  workItem.push(req.body.newItem);
  res.redirect("/work");
})




app.listen(3000, function() {
  console.log("The server started running on port 3000 at " + Date());
});
