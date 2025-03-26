const { response } = require("express");
const express = require("express");
const app = express();

//Handling get request from the client side
app.get("/", (req, res, next) => {
    //Checking the header of the authorization
    var authheader = req.headers.authorization;
    console.log(authheader)
    if(!authheader){

        var err = new Error("You are not authenticated")
        //Set the header for the response
        res.setHeader("WW-Authenticate", 'Basic')
        err.status = 401
        return next(err)

    }
    console.log(authheader)

    //Decryt the user name and the password
    var auth = new Buffer.from(authheader.split(' ')[1],
    'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];

    //Checking the details
    if (user == 'admin' && pass == 'password') {
        res.send("Welcome you are authorized")
    } else {
        var err = new Error('You are not authenticated!');
        res.setHeader('WW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }

})
app.listen(3000, () => {
    console.log("Server is starting")
})