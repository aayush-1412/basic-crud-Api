const taskModel=require("../model/task-model")

 const readAllTask=async(req,res)=>{
    try {
        const allTask= await taskModel.find();
        res.status(200).json(allTask)
    } catch (error) {
        res.status(400).json(error)
    }
        

}
 const createTask= async(req,res)=>{
    const newTask=await new taskModel({
        task:req.body.task,
    })
    try {
        
     await newTask.save()
        res.status(200).json(newTask)
    } catch (error) {
        res.status(400).json(error)
    }
}
const updateTask=async(req,res)=>{
    const id= req.params.id;
    try {
        const updatedTask= await taskModel.findByIdAndUpdate(id,{
            task:req.body.task
        })
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(400).json(error)
    }

}
const deleteTask=async(req,res)=>{
    const id=req.params.id;
    try {
        const deletedTask=await taskModel.findByIdAndDelete(id);
        res.status(200).json(deletedTask)
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports={
    readAllTask,
    createTask,updateTask,
    deleteTask
}