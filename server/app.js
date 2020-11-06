
const express = require('express');
const config = require('config');
//const {createProxyMiddleware } = require('http-proxy-middleware');
const dev = process.env.NODE_ENV !== 'production';
const mongoose = require('mongoose');




const app = express();

app.use(express.json({extended:true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
  next();
});
app.use("/api/auth", require('./routes/auth.routes'));
const PORT = config.get('port') || 5000;

 /*  app.use(
    createProxyMiddleware( '/api',{
      target: 'http://localhost:3000',
      pathRewrite:{
        "^/api":'/api'
      },
      changeOrigin: true,
    }),
    require('./routes/auth.routes')
  ); */

/* 
app.all('*', (req, res) => {
  return handle(req, res)
}) */

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


