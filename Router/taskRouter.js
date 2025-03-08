const express = require('express')
const router = express.Router()
const catchAsync = require('../utils/catchAsync')
const Category = require('../models/categorySchema')
const Task = require('../models/taskSchema')



router.route('/:id')
.get(catchAsync(async(req,res)=>{
    const{id}=req.params;
    const category = await Category.findById(id).populate('tasks')
    res.send(category)
}))
.post(catchAsync(async(req,res)=>{
    const {id}=req.params;
    const category = await Category.findById(id);
    const task = new Task(req.body)
    category.tasks.push(task)
    await category.save()
    await task.save()
    res.send({category})
}))



router.route('/:id/task/:tid')
.put(catchAsync(async(req,res)=>{
    const{tid}=req.params;
    const uptask = await Task.findByIdAndUpdate(tid,req.body);
    res.send(uptask)
}))

module.exports = router