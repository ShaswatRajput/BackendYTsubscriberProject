
const express = require("express");
const app = express();
const router = require("./Routes/users.js");


app.use(express.json());


//use router as a middleware form express js
app.use("/subscribers", router);

// app.use("./static",express.static("static"))

// app.set('view engine',"pug")
// app.set("views",path.join(__dirname,"views"))

// app.get("/",(req,res)=>{
//   res.status(200).render("homepage")
// })
// app.get("/contactpage",(req,res)=>{
//   res.status(200).render("contactform")
// })
// app.get("/searchpage",(req,res)=>{
//   res.status(200).render("searchUser")
// })
// app.post("/searchpage",getUserByName)


app.get("/", (req, res) => {
  res.send(`<h1>Hello,My name is Shaswat Kumar and this is a set of Backend APIs for getting Subscribers from MongoDB database.</h1>
    <ul>
    <li>
    1.If you want to get all users with all info then add <button><b><i>/subscribers</i></b></button> to the url.
    </li>
    <li>
    2.If you want to get all users but with only names and subscribed Channels then add <button><b><i>/subscribers/names</i></b></button> to the url.
    </li>
    <li>
    3.If you want to find any user with an Id. add <button><b><i>/subscribers/</i></b></button> to the url followed by the exact Id.
    </li>
    </ul>`);
});


module.exports = app;
