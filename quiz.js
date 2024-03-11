const express = require('express');
const app = express();
const morgan = require('morgan');
const {Pool} = require('pg');
require('dotenv').config();

let pool = new Pool();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const check = "THIS IS WORKING";

app.get('/', (request, response)=>{
    response.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Real-Time Quiz App</title>
        <script src="quiz.js" ></script>
    </head>
    <body>
        <h1>A Real-Time Quiz Application</h1>
    
        <div id="form-data" class="container">
            <h1>Enter Your Name!</h1>
            <form action="/info/get" method="GET">
                <input type="submit" value="GET">
            </form>
            <form action="/info/add" method="POST">
                <label for="email">ADD EMAIL: </label>
                <input type="text" name="email" id="email">
                <label for="nickname">ADD NICKNAME: </label>
                <input type="text" name="nickname" id="nickname">
                <input type="submit" value="ADD">
            </form>
        
            
        
        </div>
        
    </body>
    </html>`);
});

app.get('/info/get', (req, res)=>{
    try{
    pool.connect(async (error, client, release)=>{
        let resp = await client.query(`SELECT * FROM public.user`);
        release();
        res.send(resp.rows);
    })
    }catch(error){
        console.log(error);
    }
});

app.post('/info/add', (req, res)=>{
    try{
    pool.connect(async (error, client, release)=>{
        let resp = await client.query(`insert into public.user (useremail, nickname) values ($1, $2)`, [(`${req.body.email}`), (`${req.body.nickname}`)]);
        res.redirect('/info/get');
    })
    }catch(error){
        console.log(error);
    }
});

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})

