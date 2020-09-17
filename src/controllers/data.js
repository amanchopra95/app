const asyncHandler = require('../middlewares/asyncHandler')
const {data} = require('../data/data')

exports.getData = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        data
    })
})

