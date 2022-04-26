var express = require("express");
var app = express();
app.get('/hello',function(req,res){
        //Prints all the headers and its value as JavaScript object.
        console.log(JSON.stringify(req.headers));
        //Print the value of header 'first_name'.
        res.send(JSON.stringify(req.headers));
});


app.listen(80, function () {
    console.log("Headers app Running on port 80");
});
