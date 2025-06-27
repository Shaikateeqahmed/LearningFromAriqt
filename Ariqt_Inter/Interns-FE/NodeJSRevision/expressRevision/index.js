const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('get call')
})
app.post('/',(req,res)=>{
    res.send('post call')
})
app.patch('/',(req,res)=>{
    res.send('patch call')
})
app.delete('/',(req,res)=>{
    res.send('delete call')
})
app.listen(8080,()=>{
    console.log("server is on");
})