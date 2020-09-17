const asyncHandler = require('../middlewares/asyncHandler')
const path = require('path')

exports.app = asyncHandler(async (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
})

