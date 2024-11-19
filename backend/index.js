const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv')
const DBConnection = require('./config/connect')
const path = require("path");

const app = express()
dotenv.config()

//////connection of DB/////////
DBConnection()
const PORT = 8000;
  

//////middleware/////////
app.use(express.json())
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


///ROUTES///
app.use('/api/admin', require('./routers/adminRoutes'))
app.use('/api/user', require('./routers/userRoutes'))



app.listen(8001, () => {
    console.log("Server running on port 8001");
  });
  