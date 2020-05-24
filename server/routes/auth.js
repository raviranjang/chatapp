const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { auth } = require("../middleware/auth")
const {registerValidation, loginValidation} = require('../validation')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')


router.get("/", auth, async(req, res) => {
    
    try {
        const users = await User.find({}).select({email: 1, __id: 1, userName: 1})
        return res.status(200).send({success: true, users})
    } catch(err) {
        return res.status(400).send({success: false, message: "No users found"})
    }

})


router.post("/register", async(req, res) => {

    const { error } = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    // check if record already exists
    // const emailExist = await User.findOne({email: req.body.email})
    // if(emailExist) return res.status(400).send('Email already exists')

    // register the user
    const user = new User(req.body)

    try {
        const savedUser = await user.save()
        // sendEmail(doc.email, doc.name, null, "welcome")
        res.status(200).send({success: true, email: savedUser.email, __id: savedUser.__id, userName: savedUser.userName})
    } catch(err) {
        res.status(400).send({success: false, error: "Please provide valid input"})
    }
})

router.post("/login", async(req, res) => {

    const { error } = loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const { email, password } = req.body
    
    try {
        let user = await User.findOne({ email })

        if (!user) return res.status(400).json({success: false, message: "Auth failed, email not found"})
        
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword) return res.status(400).send({success: false, message: "Email and Password is not matching"})

        // create a jwt token to pass to user
        const token = jwt.sign({__id: user.__id}, process.env.TOKEN_SECRET)
        console.log(user)
        res.header('auth-token', token).send({success: true, email, __id: user.__id, userName: user.userName, token})



    } catch(err) {
        
        res.status(500).send({success: false, message: 'Error in connection to database'})
    }
})


router.get("/logout", auth, (req, res) => {
    // User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
    //     if (err) return res.json({ success: false, err })
    //     return res.status(200).send({
    //         success: true
    //     })
    // })
})

module.exports = router