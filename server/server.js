require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const cookieParser = require('cookie-parser');
//connect to mongoDB
const connectDB = require("./config/mongoDB");
connectDB();

//middlewares
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen( PORT, ()=>{
    console.log(` 1 : The server is lock and loading at PORT:${PORT}`);
})

