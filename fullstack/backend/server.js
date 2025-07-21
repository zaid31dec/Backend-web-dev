import dotenv from 'dotenv'
import express from 'express';
dotenv.config({path:'../../.env'});

const app = express();

const port = process.env.PORT||4000;

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

// middle ware use to add the static file of the frontend and add it to the backend.
app.use(express.static('dist'));

app.get("/api/jokes",(req,res)=>{
    const jokes=[
        {id:1,title:"First Joke",content:"This is first joke"},
        {id:2,title:"Second Joke",content:"This is second joke"},
        {id:3,title:"Third Joke",content:"This is third joke"},
        {id:4,title:"Fourth Joke",content:"This is fourth joke"},
        {id:5,title:"Fifth Joke",content:"This is fifth joke"},
    ];
    res.send(jokes);
});

app.listen(port, ()=>{
    console.log(`port is read at ${port}`);
});