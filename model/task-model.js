const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/taskmanger";
mongoose.set('strictQuery',false)
mongoose
  .connect(url)
  .then(() => console.log("Successfully connected to database"))
  .catch((err) => console.log("Error in connecting with databse -", err));

const taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
  }
});

const taskModel= mongoose.model('Task',taskSchema)
module.exports=taskModel;