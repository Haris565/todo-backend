const express = require('express');
const taskSchema = require("../Model/task")
const columnSchema = require("../Model/column")



const createTask = async (req,res) => {
    const {columnId , content} = req.body;
    const newTask = new taskSchema({content});
    try{
        let saveTask = await newTask.save();
      
        if(saveTask){
            let column = await columnSchema.findById(columnId)
            if(column){
                column.taskIds.push(saveTask._id)
                await column.save();
                res.status(200).json("Added")
            }
            else{
                return res.status(500).json("Cant find column to store new task")
            }
        
        }
        else {
            return res.status(500).json("Cant create a new task")
        }
        
    }
    catch(err){
        console.log(err)
        res.status(500).json("Server Error")
    }
}


module.exports = {
    createTask
};