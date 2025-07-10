const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Task = require('./taskSchema')

const categorySchema = new Schema({
    title:String,
    tasks:[{
        type:Schema.ObjectId,
        ref:'Task'
    }]
})
 
categorySchema.post('findOneAndDelete',async function(doc){
    if(doc){
        await Task.deleteMany({
            _id:{
                $in:doc.tasks
            }
        })
    }
})

module.exports = mongoose.model('Category',categorySchema)