const {check} = require ('express-validator')
const checks = [
    check("nombre")
        .notEmpty().withMessage("campo nombre es obligatorio")
        .isString().withMessage("el campo nombre tiene que ser de tipo string"),

    check("autor")
        .notEmpty().withMessage("campo autor es obligatorio")
        .isString().withMessage("el campo autor tiene que ser de tipo string"),

    check("año")
        .notEmpty().withMessage("campo año es obligatorio")
        .isNumeric().withMessage("el campo año tiene que ser de tipo numerico"),

    check("tipo")
        .notEmpty().withMessage("campo tipo es obligatorio")
        .isString().withMessage("el campo tipo tiene que ser de tipo string"),

]
module.exports = checks
