const router = require('express').Router()
const { app }  = require('../controllers/app')
router.get('*', app)

module.exports = router