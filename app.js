const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Task = require('./models/taskSchema')
const Category = require('./models/categorySchema')
const AppError = require('./utils/AppError')
const catchAsync = require('./utils/catchAsync')
const categoryRouter = require('./Router/categoryRoute')
const taskRouter = require('./Router/taskRouter')




app.listen(8000,()=>{
    console.log("Server runnig on port 8000")
})



mongoose.connect('mongodb://localhost:27017/to-do')
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Connection error"))
db.once('open',function(){
    console.log("Database connected")
})



app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/category',categoryRouter);
app.use('/category',taskRouter)


app.all('*',(req,res,next)=>{
    next(new AppError('Page Not Found',404))
})

app.use((err,req,res,next)=>{
    const{ status ,message="Something went wrong "}=err;
    res.send({status,message});
})
