const express = require('express');
const port = process.nextTick.PORT || 5000;
const app = express();

app.get('/',(req,res)=>{
    res.send('I am backend Server')
})
app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('listenting on ',port)
    }
})