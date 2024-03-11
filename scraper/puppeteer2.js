const puppeteer = require('puppeteer');
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

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://victor-mochere.com/top-10-highest-paid-actors-in-the-world");
    
    const q80 = "Who is the paid Actor of 2021 so far?";

    const q8a = await page.$x('//p');
    let q81 = await page.evaluate(p => p.innerHTML, q8a[6]);
    console.log(q81);

    const q8b = await page.$x('//p');
    let q82 = await page.evaluate(p => p.innerHTML, q8b[9]);

    const q8c = await page.$x('//p');
    let q83 = await page.evaluate(p => p.innerHTML, q8c[12]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 8");
            const q8 = await pool.query(`delete from public.question where question = 'Who is the paid Actor of 2021 so far?'`);
            const q8p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q80}`), (`${q81}`), (`${q82}`), (`${q83}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/Progression_of_the_bench_press_world_record");
    
    
    const q90 = "What is the Current (Equipped) Bench-Press lifting record?";

    const q9a = await page.$x('//td');
    let q91 = await page.evaluate(td => td.innerText, q9a[156]);

    const q9b = await page.$x('//td');
    let q92 = await page.evaluate(td => td.innerText, q9b[152]);

    const q9c = await page.$x('//td');
    let q93 = await page.evaluate(td => td.innerText, q9c[148]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 9");
            const q9 = await pool.query(`delete from public.question where question = 'What is the Current (Equipped) Bench-Press lifting record?'`);
            const q9p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q90}`), (`${q91}`), (`${q92}`), (`${q93}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/Taoiseach");
    
    
    const q100 = "Who is the Taoiseach of Ireland?";

    const q10a = await page.$x('//a');
    let q101 = await page.evaluate(a => a.innerHTML, q10a[568]);

    const q10b = await page.$x('//a');
    let q102 = await page.evaluate(a => a.innerHTML, q10b[550]);

    const q10c = await page.$x('//a');
    let q103 = await page.evaluate(a => a.innerHTML, q10c[537]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 10");
            const q10 = await pool.query(`delete from public.question where question = 'Who is the Taoiseach of Ireland?'`);
            const q10p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q100}`), (`${q101}`), (`${q102}`), (`${q103}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.pgatour.com/stats/stat.186.html");
    
    
    const q110 = "Who is Number 1 on the PGA Golf Tour?";

    const q11a = await page.$x('//a');
    let q111 = await page.evaluate(a => a.innerText, q11a[246]);

    const q11b = await page.$x('//a');
    let q112 = await page.evaluate(a => a.innerText, q11b[247]);

    const q11c = await page.$x('//a');
    let q113 = await page.evaluate(a => a.innerText, q11c[248]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 11");
            const q11 = await pool.query(`delete from public.question where question = 'Who is Number 1 on the PGA Golf Tour?'`);
            const q11p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q110}`), (`${q111}`), (`${q112}`), (`${q113}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();


app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})
