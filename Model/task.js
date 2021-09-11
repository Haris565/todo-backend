const mongoose = require ('mongoose');

const taskSchema = new mongoose.Schema ({
    content : {
      type:String,
    }
})

module.exports= Tasks = mongoose.model('tasks', taskSchema)