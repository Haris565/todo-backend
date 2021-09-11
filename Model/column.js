const mongoose = require ('mongoose');

const columnSchema = new mongoose.Schema ({
    title : {
      type:String,
      require: true,
      unique:true
    },
    taskIds:[
        {type:mongoose.Schema.Types.ObjectId,ref: 'tasks'}
    ]
})

module.exports= Column = mongoose.model('column', columnSchema)