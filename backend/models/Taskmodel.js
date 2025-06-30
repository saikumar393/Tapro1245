const mongoose=require('mongoose');
const Taskschema=new  mongoose.Schema({
    employeeName: {
    type: String,
    required: true,
    trim: true
  },
 tasktitle :{
    type:String,
    required:true,
 },
  Description:{
    type:String,
    required:true
  },
  deadline:{
    type:Date,
    required:true
  },
  remarks:{
    type:String

  },
meetings:{
    type:String

}
});
const Task=mongoose.model('Task',Taskschema);
module.exports={Task};