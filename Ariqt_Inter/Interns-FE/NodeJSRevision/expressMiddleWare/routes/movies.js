const {Router} = require("express");
const fs = require('fs');

const movies = Router();

movies.get('/',(req, res)=>{
    res.send("movies route")
});

movies.post('/addMovie',(req, res)=>{
    let data = fs.readFileSync('./movies.json','utf-8');
    data = JSON.parse(data);
    data.movies.push(req.body);
    fs.writeFileSync('./movies.json', JSON.stringify(data));
    res.send('Movie added successfully')
})

module.exports = {movies};