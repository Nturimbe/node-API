const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res)=>{
  res.send('Hello, my node API is running on port 3000')
})


app.get('/blog', (req, res)=>{
  res.send('Hello, my  blog is available for public reading on port 3000. nodemon has been added to it.')
})

//mongoose.set('strictly', false)
mongoose.connect('mongodb+srv://Nturimbe:Nturimbe@gabelapi.10ejsqy.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  app.listen(3000, ()=>{
    console.log('My API app is running on port 3000')
  })
  console.log('Connected to MongoDB')
}).catch((error) => {
    console.log('error!')
  })