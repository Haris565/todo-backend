const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./config/db")
const taskRoutes = require('./routes/task.routes')
const columnRoute = require("./routes/column.routes")
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 5000;


connectDB()
app.use(cors())
app.use(express.json())




app.use('/task', taskRoutes )
app.use('/column', columnRoute )


app.listen(PORT, () => {
      console.log("Connected ");
    })



