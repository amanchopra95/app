const asyncHandler = require('../middlewares/asyncHandler')

exports.getData = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {}
    })
})

