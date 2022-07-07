const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.get("/", function(req,res){
  const d = new Date();
  let day = d.getDay();

  if (day===0|| day===6)
  {
    res.send("Its a weekend");
  }
  else{
    res.send("Go work you fatass");
  }
});




app.listen(3000,function(){
  console.log("The server started running on port 3000 at "+Date());
});
