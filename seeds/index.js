const mongoose = require('mongoose')
const Category = require('../models/categorySchema')
const Task = require('../models/taskSchema')

mongoose.connect('mongodb://127.0.0.1:27017/to-do', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Seed Function
const seedDB = async () => {
    await Category.deleteMany({});
    await Task.deleteMany({});

    const tasks = await Task.insertMany([
        { task: "Complete project report", status: false, priority: "High" },
        { task: "Buy groceries", status: true, priority: "Mid" },
        { task: "Read a book", status: false, priority: "Low" },
        { task: "Prepare for exam", status: false, priority: "High" },
        { task: "Go for a run", status: true, priority: "Mid" },
        { task: "Organize desk", status: false, priority: "Low" },
        { task: "Fix bug in code", status: false, priority: "High" },
        { task: "Reply to emails", status: true, priority: "Mid" },
        { task: "Plan weekend trip", status: false, priority: "Low" }
    ]);

    const categories = [
        { title: "Work", tasks: [tasks[0]._id, tasks[6]._id] },
        { title: "Personal", tasks: [tasks[1]._id, tasks[2]._id, tasks[4]._id] },
        { title: "Study", tasks: [tasks[3]._id] },
        { title: "Health", tasks: [tasks[5]._id, tasks[8]._id] },
        { title: "Productivity", tasks: [tasks[7]._id] }
    ];

    await Category.insertMany(categories);
    console.log("Database Seeded!");
    mongoose.connection.close();
};

// Run Seed
seedDB();