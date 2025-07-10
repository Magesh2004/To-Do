const express = require('express');
const router = express.Router()
const catchAsync = require('../utils/catchAsync')
const category = require('../controlers/category')

router.route('/')
.get(catchAsync(category.FetchAllCategory))
.post(catchAsync(category.CreateCategory))

router.route('/:id')
.delete(catchAsync(category.DeleteCategory))
.put(catchAsync(category.UpdateCategory))

module.exports = router