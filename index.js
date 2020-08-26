var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require('dotenv').config();
const {NODE_PORT,DATABASE_URL}=process.env;

// require("dotenv").config();

var app = express();
var gg = require("./routes/todoroute");

const isdevelopement=process.env.NODE_ENV=='developemnt';




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
if(isdevelopement){
    app.use(cors());
}
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/api", gg);



mongoose.connect(DATABASE_URL,{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    
    useNewUrlParser: true 
}).then(()=>{
    app.listen(NODE_PORT,()=>{
        console.log(`server is running on ${NODE_PORT}`);
    })
}).catch((err)=>{
    console.log(`DB connection failed ${err}`);
})