const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('caralho2')
})


app.listen(3001)
