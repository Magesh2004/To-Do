const Category = require('../models/categorySchema')
const Task = require('../models/taskSchema')
const sendResponse = require('../utils/sendResponse')

module.exports.CreateTask = async(req,res)=>{
    const {id}=req.params;
    const category = await Category.findById(id);
    const task = new Task(req.body)
    category.tasks.push(task)
    await category.save()
    await task.save()
    sendResponse(res,200,true,"Succesfully Added",{category})
}
module.exports.ViewTasks = async(req,res)=>{
    const{id}=req.params;
    const category = await Category.findById(id).populate('tasks')
    sendResponse(res,200,true,"Succesfully fetched",{category})
}
module.exports.UpdateTask = async(req,res)=>{
    const{tid}=req.params;
    const uptask = await Task.findByIdAndUpdate(tid,req.body);
    sendResponse(res,200,true,"Succesfully Updated",{uptask})
}
module.exports.DelteTask = async(req,res)=>{
    const{tid}=req.params;
    await Task.findByIdAndDelete(tid,req.body);
    sendResponse(res,200,true,"Succesfully Deleted")
}