const express = require('express');

const app = express();
app.get('/',(req,res)=>{
    res.send('janardan chaugule')
});

app.listen(5000,()=>console.log('api running'));