require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/leetcode',(req,res)=>{
    res.send('Leetcode.')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>You Tube</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
