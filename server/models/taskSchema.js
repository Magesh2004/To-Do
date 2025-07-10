const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task:String,
    status:Boolean,
    priority:{
        type:String,
        enum:["High","Mid","Low"]
    }
})
const Task = mongoose.model('Task',taskSchema)

module.exports = Task