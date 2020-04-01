const Joi = require('joi')

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const { error } = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error:'Debe proporcionar una dirección de correo electrónico válida'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 
                            `La contraseña proporcionada no coincide con las siguientes reglas:
                            <br>
                            1. Debe contener SOLO los siguientes caracteres: minúsculas, mayúsculas, números.
                            <br>
                            2. Debe tener al menos 8 caracteres de longitud y no más de 32 caracteres de longitud.
                            `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Información de registro inválida'
                    })
            }
        } else {
            next()
        }
    }
}