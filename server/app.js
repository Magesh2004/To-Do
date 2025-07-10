const express = require('express')
const app = express()
const connectDB = require('./config/db')
const AppError = require('./utils/AppError')
const categoryRouter = require('./Router/categoryRoute')
const taskRouter = require('./Router/taskRouter')
const errorHandler = require('./utils/errorHandler')

connectDB()


app.listen(8000,()=>{
    console.log("Server runnig on port 8000")
})

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use('/category',categoryRouter);
app.use('/category',taskRouter)


app.all('*',(req,res,next)=>{
    next(new AppError('Page Not Found',404))
})

app.use(errorHandler)
