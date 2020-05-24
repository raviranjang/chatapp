const Joi = require("@hapi/joi")

// register validation
const registerValidation = data => {
    const schema = Joi.object({
        userName: Joi.string()
                    .min(6)
                    .required(),
        email: Joi.string()
                    .min(6)
                    .required()
                    .email(),
        password: Joi.string()
                    .min(6)
                    .required()
    })

    return schema.validate(data)
}


// login validation
const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string()
                    .min(6)
                    .required()
                    .email(),
        password: Joi.string()
                    .min(6)
                    .required()
    })

    return schema.validate(data)
}

module.exports.loginValidation = loginValidation
module.exports.registerValidation = registerValidation
