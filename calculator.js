const express = require('express'); // package for app express
const bodyParser = require('body-parser'); // body-parser for geting the form data from th html
const app = express(); //initiating app for
const port = 3000; // seeting port
app.use(bodyParser.urlencoded({ // setting body-parser to use in the app
  extended: true
}));




app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html'); // here sendFile() works for the locating the html file or for using
  // for using html from the root director use sendFile()
});

app.post('/', function(req, res) {
  var n1 = Number(req.body.num1); // getting the input value from the use and sotiring it to a variable .
  var n2 = Number(req.body.num2); // getting the input value from the use and sotiring it to a variable .
  var result = n1 + n2; // using the value which is gotten from the user.
  res.send("The Addition is " + result);

});

app.get("/bmicalculator", function(req, res) { // seeting another routing using "/bmicalculator"
  res.sendFile(__dirname + '/bmiCalculator.html'); // this is the directory of Bmi calculaor directoryfile.
});

app.post('/bmicalculator', function(req, res) { // Here the routing should be same as action="/bmicalculator" in the html file.
  var w = parseFloat(req.body.weight); // getting the input value from the use and sotiring it to a variable .
  var h = parseFloat(req.body.height); // getting the input value from the use and sotiring it to a variable .
  var result = w / (Math.pow(h, 2)); // using the value which is gotten from the user.
  res.send("Your BMI is :  " + result);
});



app.listen(port, function() { // this listen methond respond according to the port here port is  = 3000.
  console.log("server started");
})








// app.get("/inputs", function (req,res) {
// var ans =   app.post('/bmicalculator', function(req,res){
//     var w1 = parseFloat(req.body.weight);
//     var h1 = parseFloat(req.body.height);
//     res.send("This Your Age : "+ w1 + "This Your Height: "+ h1);
//   });
//     res.send(ans);
// });
