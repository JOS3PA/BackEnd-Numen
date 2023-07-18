const {Schema, model} = require('mongoose');

const schema = new Schema({
    nombre:{
        type:String,
        required: true
    },
    autor:{
        type:String,
        required: true
    },
    año:{
        type:Number,
        required: true
    },
    tipo:{
        type:String,
        required: true,
        enum: ['teoria', 'improvisacion', 'obras'],
    },
    email:{
        type:String,
        unique: true
    },
})

const Melquiades = model ('Melquiades', schema);
module.exports ={Melquiades}