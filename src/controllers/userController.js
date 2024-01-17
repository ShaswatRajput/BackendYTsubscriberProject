const subscribers = require("../models/subscribers");

// function for getiing all users

const getAllUsers = async (req, res) => {
  try {
    //Query
    const data = await subscribers.find({}).select("-__v");

    //response
    // res.status(200).json(data);
    res.status(200).render("allData",{data})
  } catch (err) {
    //error
    res.status(400).json({ err: err.message });
  }
};

//function for getting a user by his/her Id

const getUserById = async (req, res) => {
  try {
    //getting value of id 
    const id = req.body;
    console.log(id)
    //Query for getting user by Id
    const IdData = await subscribers.findOne({ _id: id }).select("-__v");

    //response
    res.status(200).send('found')
  } catch (err) {
    //error
    res.status(400).send(`No such id exists. Message : ${err}`);
  }
};

//function for getting all users with only Name and subscribed Channel fields

const getUserNames = async (req, res) => {
  try {
    //Query to find required data and only displaying specific fields
    const data = await subscribers
      .find({}, { name: 1, subscribedChannel: 1 })
      .select("-_id");
    //response with 200 status code for successful execution
    res.status(200).json(data);
  } catch (err) {
    //error
    res.status(400).json({ err: err.message });
  }
};

//-------------------------------DumpBin---------------------------------------------------

  const getUserByName = async (req,res)=>{
    try{
      const {name} = req.body
      const nameData = await subscribers.find({name}).select("-__v")
      res.status(200).render("searchResults",{"results": nameData})
      console.log(nameData)
      
    } catch (err){
       res.status(400).send(`there was an error : ${err}`)
       console.log(err)
    }

  }
 const createNewUser = async (req,res)=>{
    // const { name, subscribedChannel } = req.body;
  try {
    const newEntry = await subscribers.create(req.body)
    res.status(201).render("allData",{"data": newEntry})

    } catch (err)
    {
        res.status(400).json({ err: err.message });
    }

}
//   const UpdateUser = async (req,res) => {
//     try{
//     const {id} = req.params
//     const {name,subscribedChannel} = req.body
//     const UpdateData = await subscribers.findOneAndUpdate({_id:id},{name,subscribedChannel})
//     res.status(200).send(`${UpdateData} was successfully updated`)

//     } catch (err) {
//       res.status(400).send(`there was an error : ${err}`)
//     }

//   }

//   const deleteUser = async (req,res)=>{
//     try {
//       const {id} = req.params
//       const deleteData = await subscribers.findOneAndDelete({_id:id})
//       res.status(200).send("Data succesfully deleted")

//     } catch (err){
//       res.status(400).send(`there was an error : ${err}`)
//     }
//   }


module.exports = { getAllUsers, getUserById, getUserNames,createNewUser, getUserByName};
