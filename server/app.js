const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();


const router = require("./routes/auth.routes");

app.use("/api/auth", router);

const PORT = config.get('port') || 5000;

const settings = {
  reconnectTries : Number.MAX_VALUE,
  autoReconnect : true
};
const localUri = "mongodb://127.0.0.1:27017/test";
var db ={};
async function start() {
  try {
    await mongoose.connect(localUri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    },(err,dbref)=>{
      db = dbref;
    });
    app.use("/", router);
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
   
  } catch(e) {
    console.log('Server Error', e.message);
    process.exit();
  }
}

start();
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});


