const express=  require("express");
const app = express();
const cors = require("cors");
const {createTodo,updateTodo} = require("/home/yagya/Documents/javascript/todoApplication/todo/backend/types.js")
const {todo} = require("/home/yagya/Documents/javascript/todoApplication/todo/backend/db/db.js");

app.use(cors(
    {
        origin : "http://localhost:5173"
    }
))
app.use(express.json());
app.post("/todo",async(req,res,next)=>
{
    const createPayLoad = req.body;
    const parsePayLoad =  createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success)
    {
        res.status(411).json({
            msg : "you sent the wrong inputs"
        });
        return ; 
    }
    //put it in mongo
    await todo.create({
        title : createPayLoad.title,
        description : createPayLoad.description,
        completed : false,
    });
    res.json({
        msg : "todo created"
    });
});
app.get("/todos",async(req,res,next)=>{
    const todos = await todo.find({
        
    });
    res.json({
        todos
    })
});

app.put("/completed",async(req,res,next)=>{

    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success)
    {
        res.status(411).json({
            msg : "you send wrong id"
        });
        return;
    }
    await todo.updateOne({
        _id : updatePayLoad.id
    }
    ,{
        completed : true
    });
    res.json({
        msg : "todo marked as completed"
    });
});
app.listen(3000,()=>{
    console.log("listening on port 3000");
})