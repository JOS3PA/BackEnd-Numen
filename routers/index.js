const express = require('express')
const router = express.Router()
const {index} = require ('../controlers/indexControler')



router.get('/', index) 

  module.exports = router
  