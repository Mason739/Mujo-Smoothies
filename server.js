// Setup stuff
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


// Home page
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/index.html'));

});

// Browse page
router.get('/browse/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/browse.html'));

});

// Style sheet
router.get('/templates/style/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/style.css'));

});



// ============== ALL IMAGES =============
router.get('/background.jpg/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/background.jpg'));

});

router.get('/strawberry.png/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/strawberry.png'));

});

router.get('/truck.png/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/truck.png'));

});

router.get('/globe.png/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/globe.png'));

});

router.get('/smoothies/strawberry',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/strawberrySmoothie.jpg'));

});

router.get('/smoothies/blueberry',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/blueberrySmoothie.jpg'));

});

router.get('/smoothies/kale',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/kaleSmoothie.jpg'));

});

router.get('/smoothies/pome',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/pomegranateSmoothie.jpg'));

});

router.get('/smoothies/banana',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/bananaSmoothie.jpg'));

});

router.get('/smoothies/strawberrybanana',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/strawBananaSmoothie.jpg'));

});

router.get('/smoothies/superfruit',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/superfruit.jpg'));

});

router.get('/smoothies/strawbananapb',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/strawberrybananaPB.jpg'));

});

router.get('/icon/bottle',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/images/bottle.png'));

});


// Javascript for product page
router.get('/product/js',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/productJS.js'));

});






// ============ ALL PRODUCT PAGES ============

router.get('/product/banana',function(req,res){
      res.sendFile(path.join(__dirname+'/templates/products/banana.html'));

    });

router.get('/product/pomegranate',function(req,res){
      res.sendFile(path.join(__dirname+'/templates/products/pomegranate.html'));

    });

router.get('/product/strawberry',function(req,res){
      res.sendFile(path.join(__dirname+'/templates/products/strawberry.html'));

    });

router.get('/product/super-fruit',function(req,res){
      res.sendFile(path.join(__dirname+'/templates/products/super-fruit.html'));

    });

router.get('/product/strawberry-banana',function(req,res){
      res.sendFile(path.join(__dirname+'/templates/products/strawberry-banana.html'));

    });

router.get('/product/strawberry-banana-pb',function(req,res){
      res.sendFile(path.join(__dirname+'/templates/products/strawberry-banana-pb.html'));

    });

router.get('/product/kale',function(req,res){
      res.sendFile(path.join(__dirname+'/templates/products/kale.html'));

    });

router.get('/product/blueberry',function(req,res){
      res.sendFile(path.join(__dirname+'/templates/products/blueberry.html'));

    });






//add the router
app.use('/', router);
app.listen(process.env.port || 8000);

console.log('Running at Port 8000');
