const express = require("express");
const {validation} = require('./middleWare/validation.js')
const {movies} = require('./routes/movies.js')
const app = express();

app.use(express.json());
app.use(validation);
app.use('/movies',movies)

app.listen(8080,()=>{
    console.log('Server is on');
})