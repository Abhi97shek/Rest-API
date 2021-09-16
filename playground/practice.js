const User =require('../src/Model/users');
const Task =require('../src/Model/task');
const { findByIdAndDelete } = require('../src/Model/users');
require('../src/db');



const DeleteTaskAndCount = async (id)=>{

    const deleteTask = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed:false});
    return count;


};

DeleteTaskAndCount("6142e4d92027a7070e04c039").then(count=>{
    console.log(count);
}).catch(err=>{
    console.log(err);
})

// Task.findByIdAndDelete("6141e4d5cb4056a15bb421de").then(user=>{
//     console.log(user);
//     return Task.countDocuments({completed:false})
// }).then(count=>{
//     console.log(count);
// }).catch(err=>{

//     console.log(err);
// });