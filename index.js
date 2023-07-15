const express = require('express')
const app = require('./src/app.js')
const mongoose = require('mongoose')



const port = 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// Connect to DATABASE

mongoose.connect("mongodb+srv://shaswat1:test1235@cluster0.ppxminb.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
