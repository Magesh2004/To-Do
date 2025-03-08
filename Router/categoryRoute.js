const express = require('express');
const router = express.Router()
const Category = require('../models/categorySchema')
const catchAsync = require('../utils/catchAsync')




router.route('/')
.get(catchAsync(async(req,res)=>{
    const categories =await Category.find({})
    res.send(categories)
}))
.post(catchAsync(async(req,res)=>{
    console.log(req.body)
    const newCat = new Category(req.body)
    await newCat.save()
    res.send(newCat)
}))




router.route('/:id')
.delete(catchAsync(async(req,res)=>{
    const {id} = req.params;
    await Category.findByIdAndDelete(id)
    res.send('Deleted Successfully')
}))
.put(catchAsync(async(req,res)=>{
    const{id}=req.params;
    const Cat = await Category.findByIdAndUpdate(id,req.body);
    res.send(cat)
}))

module.exports = router