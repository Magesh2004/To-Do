const express = require('express')
const router = express.Router()
const catchAsync = require('../utils/catchAsync')
const task = require('../controlers/task')


router.route('/:id')
.get(catchAsync(task.ViewTasks))
.post(catchAsync(task.CreateTask))

router.route('/:id/task/:tid')
.put(catchAsync(task.UpdateTask)).delete(catchAsync(task.DelteTask))

module.exports = router