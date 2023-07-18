const {Melquiades} = require('../models/melquiades');
const validarID = async (req, res, next) => {
    try {
        const persona = await Melquiades.findById(req.params.id);
        console.log('heme aqui in the middleware')
        if (persona !== null ) {
            next();
        }else{
            res.status(400).json({
                msg: "el id " + req. params.id + "ingresadp es invalido"
            })
        }
    } catch (error) {
        res.status(500).json(error)      
    }
}

module.exports = { validarID }