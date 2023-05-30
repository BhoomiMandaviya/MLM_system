const Joi=require("joi");

const signup = Joi.object({
    username: Joi.string()
        .alphanum().min(3).max(30).required(),
    password: Joi.string()
        .min(5),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        referaluse:Joi.string()
        .alphanum()
        .min(6)
        .max(6)
        .required()
})

module.exports = signup