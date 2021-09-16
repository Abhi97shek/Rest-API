const express =require("express");
const router =express.Router();
const Task =require('../Model/task');

router.post('/tasks',(req,res)=>{
 
    const task = new Task(req.body);
    task.save().then(data=>{
        res.status(201).send(data);
    }).catch(err=>{
        res.status(500).send(err);
    });
});



router.get('/tasks',(req,res)=>{

    Task.find({}).then(tasks=>{
        res.status(200).send(tasks);
    }).catch(err=>{
        res.status(500).send(err);
    });
});

router.get('/tasks/:id',(req,res)=>{

    const _id = req.params.id;
    Task.findById(_id).then(task=>{
        res.status(200).send(task);
    }).catch(err=>{
        res.status(500).send(err);
    });
});



router.delete('/tasks/:id',(req,res)=>{

    const _id = req.params.id;
Task.findByIdAndDelete(_id).then(task=>{
    res.status(200).send(task);
}).catch(e=>{
        res.status(400).send(e);
});
});


module.exports = router;