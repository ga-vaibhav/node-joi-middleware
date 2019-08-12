const success = (res, data = {}, message = '') => {
    return res.json({
        success: true,
        message,
        data
    })
}

const failure = (res, error = [], message = 'Failure Operation') => {
    return res.json({
        success: false,
        message,
        error
    })
}

module.exports = {
    success,
    failure
}