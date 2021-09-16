const mongoose =require('mongoose');
const validator =require('validator');

mongoose.connect("mongodb://localhost:27017/task-manager-api");





// // const t1  = new Task({
// //     description:"Compelted a One Node.js Module",
// //     completed:false
// // });

// t1.save().then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// });