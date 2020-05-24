const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 12

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});


userSchema.pre('save', function( next ) {
    var user = this;
    if(user.isModified('password')) {    
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash 
                next()
            })
        })
    } else {
        next()
    }
});


module.exports = mongoose.model('User', userSchema, 'CHAT_DB_User');