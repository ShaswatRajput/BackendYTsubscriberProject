const express = require("express")
const {getAllUsers, getUserById,getUserNames} = require("../controllers/userController.js")

//Router Middleware from Express JS
const router = express.Router()

//for getting all the users with all the details
router.get("/",getAllUsers)

//for getting all the users with only Name and Subscribed Channel field
router.get("/names",getUserNames)

//for getting a user's details by specific id (using id as params)
router.get("/:id",getUserById)


//export

module.exports = router ;
