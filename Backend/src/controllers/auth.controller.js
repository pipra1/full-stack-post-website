const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
  const {username, email, password} = req.body

  console.log(req.body);
  
  const isUserExist = await userModel.findOne({email})
  console.log(isUserExist);
  
  if(isUserExist) {
    return res.status(400).json("User already exist")
  }

  const user = await userModel.create({
    username, email, password
  })

  console.log(user);

  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET)
  
  res.cookie("token", token)

  res.status(201).json({
    message: "User registed successfully",
    user,
    token
  })
}

module.exports = {registerUser}