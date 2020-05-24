// const { User } = require('../models/User');
const jwt = require("jsonwebtoken")

let auth = (req, res, next) => {
  
    const token = req.header('auth-token')

    if(!token) return res.status(401).send("Access denied")

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    } catch(err) {
        return res.status(400).send('Invalid Token')
    }



  // User.findByToken(token, (err, user) => {
  //   if (err) throw err;
  //   if (!user)
  //     return res.json({
  //       isAuth: false,
  //       error: true
  //     });

  //   req.token = token;
  //   req.user = user;
  //   next();
  // });
}

module.exports = { auth }