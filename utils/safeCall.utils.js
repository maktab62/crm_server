const safeCallUtils = function (mainFunc, req, res, next) {
    return function () {
        try {
            mainFunc.apply(this, arguments);
        } catch (error) {
            return response.status(500).json({
                success: false,
                message: error.message
            });
        }
    };
};
module.exports = safeCallUtils;