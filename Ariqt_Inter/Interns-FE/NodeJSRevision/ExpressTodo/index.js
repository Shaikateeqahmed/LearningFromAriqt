const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    let data = fs.readFileSync('./db.json','utf-8');
    data = JSON.parse(data);
   res.status(200).send(data);
})

app.post('/addTodo',(req,res)=>{
    let data = fs.readFileSync('./db.json','utf-8');
    data = JSON.parse(data);
    data.todos.push(req.body);
    fs.writeFileSync('./db.json', JSON.stringify(data));
    res.send('Todo Added successfully');
})

app.patch('/updateTodo',(req,res)=>{
    let data = fs.readFileSync('./db.json','utf-8');
    data = JSON.parse(data);
    data.todos = data.todos.map((todo)=>{
           if(todo.id === req.body.id){
            return {...todo, status : !todo.status}
           }else{
            return todo
           }
    })
    fs.writeFileSync('./db.json', JSON.stringify(data));
    res.send('Todo updated successfully');
})

app.delete('/deleteTodo',(req,res)=>{
    let data = fs.readFileSync('./db.json','utf-8');
    data = JSON.parse(data);
    data.todos = data.todos.map((todo)=>{
           if(todo.id !== req.body.id){
             return todo;
           }
    })
    fs.writeFileSync('./db.json', JSON.stringify(data));
    res.send('Todo Deleted successfull');
})

app.listen(8080,()=>{
    console.log("Server is on");
})