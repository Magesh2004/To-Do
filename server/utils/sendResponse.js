const sendResponse = (res,status,success,message,data)=>{
    res.status(status).json({
        status,
        success,
        message,
        data
    })
}
module.exports = sendResponse