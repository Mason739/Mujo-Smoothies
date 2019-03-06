const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/templates/style/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/style.css'));
  //__dirname : It will resolve to your project folder.
});

router.get('/background.jpg/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/background.jpg'));
  //__dirname : It will resolve to your project folder.
});

router.get('/strawberry.png/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/strawberry.png'));
  //__dirname : It will resolve to your project folder.
});

router.get('/truck.png/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/truck.png'));
  //__dirname : It will resolve to your project folder.
});

router.get('/globe.png/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/globe.png'));
  //__dirname : It will resolve to your project folder.
});

router.get('/browse/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/browse.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/smoothies/strawberry',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/strawberrySmoothie.jpg'));
  //__dirname : It will resolve to your project folder.
});

router.get('/smoothies/blueberry',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/blueberrySmoothie.jpg'));
  //__dirname : It will resolve to your project folder.
});

router.get('/smoothies/kale',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/kaleSmoothie.jpg'));
  //__dirname : It will resolve to your project folder.
});

router.get('/smoothies/pome',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/pomegranateSmoothie.jpg'));
  //__dirname : It will resolve to your project folder.
});

router.get('/smoothies/banana',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/bananaSmoothie.jpg'));
  //__dirname : It will resolve to your project folder.
});

router.get('/smoothies/strawberrybanana',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/strawBananaSmoothie.jpg'));
  //__dirname : It will resolve to your project folder.
});

router.get('/smoothies/superfruit',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/superfruit.jpg'));
  //__dirname : It will resolve to your project folder.
});

router.get('/smoothies/strawbananapb',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/strawberrybananaPB.jpg'));
  //__dirname : It will resolve to your project folder.
});


router.get('/product',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/product.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/product/js',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/productJS.js'));
  //__dirname : It will resolve to your project folder.
});

router.get('/icon/bottle',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/bottle.png'));
  //__dirname : It will resolve to your project folder.
});

router.get('/test/output.html',function(req,res){
  res.sendFile(path.join(__dirname+'/output.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 8000);

console.log('Running at Port 8000');
