const express = require('express');
const app = express();

app.use((req,res,net=>{
    res.status(200).json({
        message:'app is running'
    })
}))