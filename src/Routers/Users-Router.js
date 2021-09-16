const express =require("express");
const router =express.Router();
const User =require('../Model/users');

router.get("/",(req,res)=>{
    res.send("Data from New File");

});

router.post('/users',(req,res)=>{

    const user =new User(req.body);

    user.save().then(data=>{
     
            res.status(201).send(data);
    }).catch(err=>{

    
        res.status(400).send(err);
    });

});


router.get('/users',(req,res)=>{

    User.find({}).then(users=>{
        res.status(200).send(users);
    }).catch(err=>{
        res.status(500).send(err);
    });
});

router.get('/user/:id',(req,res)=>{

    const _id = req.params.id;

    User.findById(_id).then(user=>{
        res.status(200).send(user);
    }).catch(err=>{
        res.status(500).send(err);
    });

});

router.delete('/users/:id',(req,res)=>{

    const _id = req.params.id;
User.findByIdAndDelete({_id}).then(user=>{
    console.log(user);
    res.status(200).send(user);
}).catch(e=>{
        res.status(400).send(e);
});
});


module.exports =router;