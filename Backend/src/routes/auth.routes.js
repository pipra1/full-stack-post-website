const express = require('express')
const authController = require('../controllers/auth.controller')
const router = express.Router()
const jwt = require('jsonwebtoken')
const userModel = require('../model/user.model')

router.post('/register', authController.registerUser)
router.post('/create', async (req, res) => {
  console.log(req.cookies);
  console.log(req.body);

  try {
    const decode = jwt.verify(req.cookies.token, process.env.JWT_SECRET)
    const user = await userModel.findById(decode.id)
    console.log(decode, user);
    
    if(!user) {
      return res.status(401).json("Unauthorized access - User not found")
    }
  } catch(error) {
    return res.status(400).json("Unauthorized access")
  }
  
  res.status(200).json({
    message: "Post created successfully"
  })
})

module.exports = router