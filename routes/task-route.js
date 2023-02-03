const router = require("express").Router()
const {readAllTask,createTask,updateTask, deleteTask}= require("../controllers/task-controller")
router.get('/all',readAllTask);
router.post('/create',createTask)
router.put('/update/:id',updateTask)
router.delete('/delete/:id',deleteTask)
module.exports=router
