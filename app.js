const express =require('express');
const User =require('./src/Model/users');
const Task =require('./src/Model/task');
const UserRoute =require("./src/Routers/Users-Router");
const TaskRoute = require("./src/Routers/task-Router");
require('./src/db');
const app =express();
const port =process.env.PORT || 3000;

app.use(express.json());




app.use(UserRoute);

app.use(TaskRoute);

app.listen(port,()=>{
    console.log(`listening to the PORT ${port}`)
});