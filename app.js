const express = require('express');
const bodyParser = require('body-parser');
const engine = require('consolidate');
const cors = require('cors');

const app = express();

app.engine("ejs",engine.ejs);
app.set("views","./views");
app.set("view engine","ejs");

app.use(cors());
app.use(express.static("public"));

app.get("/",(req,res)=>{
  res.send({
    message:"It is working"
  })
})



const PORT = 5000;
//module.exports = app;
app.listen(PORT, ()=>
console.log(`server is running on port${PORT}`)
);