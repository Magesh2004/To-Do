const Category = require('../models/categorySchema')
const sendResponse = require('../utils/sendResponse')



module.exports.FetchAllCategory = async(req,res)=>{
    const categories =await Category.find({}).populate('tasks')
    sendResponse(res,200,true,"Succesfully fetched categories",{categories})
}

module.exports.CreateCategory = async(req,res)=>{
    console.log(req.body)
    const newCat = new Category(req.body)
    await newCat.save()
    sendResponse(res,200,true,"Succesfully Added",{newCat})
}


module.exports.DeleteCategory = async(req,res)=>{
    const {id} = req.params;
    await Category.findByIdAndDelete(id)
    sendResponse(res,200,true,"Succesfully fetched categories")
}


module.exports.UpdateCategory = async(req,res)=>{
    const{id}=req.params;
    const Category = await Category.findByIdAndUpdate(id,req.body);
    sendResponse(res,200,true,"Succesfully Edited category",{Category})
}