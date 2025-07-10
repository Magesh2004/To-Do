const express = require('express');
const router = express.Router()
const Category = require('../models/categorySchema')
const catchAsync = require('../utils/catchAsync')
const sendResponse = require('../utils/sendResponse')

router.route('/')
.get(catchAsync(async(req,res)=>{
    const categories =await Category.find({}).populate('tasks')
    sendResponse(res,200,true,"Succesfully fetched categories",{categories})
}))
.post(catchAsync(async(req,res)=>{
    console.log(req.body)
    const newCat = new Category(req.body)
    await newCat.save()
    sendResponse(res,200,true,"Succesfully Added",{newCat})
}))




router.route('/:id')
.delete(catchAsync(async(req,res)=>{
    const {id} = req.params;
    await Category.findByIdAndDelete(id)
    sendResponse(res,200,true,"Succesfully fetched categories")
}))
.put(catchAsync(async(req,res)=>{
    const{id}=req.params;
    const Cat = await Category.findByIdAndUpdate(id,req.body);
    sendResponse(res,200,true,"Succesfully Edited category",{Cat})
}))

module.exports = router