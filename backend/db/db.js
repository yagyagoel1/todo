const mongoose =  require("mongoose");


mongoose.connect("mongodb+srv://yagyagoel1:rymu@cluster0.ovuv7qc.mongodb.net/todo");

const todoSchema =  new mongoose.Schema({
    title : String ,
    description : String ,
    completed : Boolean
});
const todo = mongoose.model("Todo", todoSchema);
module.exports={
    todo
}
