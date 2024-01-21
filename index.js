const express = require('express');   // CommonJS syntax for importing express module
// import express from "express"   
require('dotenv').config()
const app = express();  // Creating an instance of the Express application
const port = 3000;  // Setting the port number

// Handling requests to the root path ('/')
app.get('/', (req, res) => {
  res.send('hello fucking world!!!!');  // Responding with a message
});

// Handling requests to the '/shit' path
app.get('/shit', (req, res) => {
  res.send('eat shit');  // Responding with a different message
});

app.get('/login' , (req,res)=>{
    res.send('<h1>nodemon install kar</h1>')
})

// Setting up the server to listen on the specified port
app.listen(process.env.PORT, () => {
  console.log('Listening on port',port );
});


// whenever you update code you have to restart it ( so use nodemon)