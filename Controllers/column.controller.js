const express = require('express');
const taskSchema = require("../Model/task")
const columnSchema = require("../Model/column")



const createColumn = async (req,res) => {
    const {title} = req.body;
    const newColumn = new columnSchema({title});
    try{
        let saveColumn = await newColumn.save();
        if(saveColumn){
            return res.json(saveColumn)
        
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

const getColumn = async (req,res) => {
    try {
        let columns = await columnSchema.find()
        let tasks = await taskSchema.find()
        res.status(200).json({columns, tasks})
    }
    catch (err){
        console.log(err)
        res.status(500).json("Server error")
    }
}


module.exports = {
    createColumn,
    getColumn
};