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
    await page.goto("https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table");
    
    
    const q170 = "Which Country has won the most Medals at the Summer Olympics?";

    const q17a = await page.$x('//a');
    let q171 = await page.evaluate(a => a.innerText, q17a[511]);

    const q17b = await page.$x('//a');
    let q172 = await page.evaluate(a => a.innerText, q17b[512]);

    const q17c = await page.$x('//a');
    let q173 = await page.evaluate(a => a.innerText, q17c[513]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 17");
            const q17 = await pool.query(`delete from public.question where question = 'Which Country has won the most Medals at the Summer Olympics?'`);
            const q17p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q170}`), (`${q171}`), (`${q172}`), (`${q173}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.numbeo.com/crime/rankings_by_country.jsp");
    
    
    const q180 = "Which Country has the lowest crime rate?";

    const q18a = await page.$x('//td');
    let q181 = await page.evaluate(td => td.innerText, q18a[539]);

    const q18b = await page.$x('//td');
    let q182 = await page.evaluate(td => td.innerText, q18b[535]);

    const q18c = await page.$x('//td');
    let q183 = await page.evaluate(td => td.innerText, q18c[531]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 18");
            const q18 = await pool.query(`delete from public.question where question = 'Which Country has the lowest crime rate?'`);
            const q18p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q180}`), (`${q181}`), (`${q182}`), (`${q183}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/List_of_current_longest-ruling_non-royal_national_leaders");
    
    
    const q190 = "Who is the longest-serving non-royal leader in the world?";

    const q19a = await page.$x('//a');
    let q191 = await page.evaluate(a => a.innerText, q19a[5]);

    const q19b = await page.$x('//a');
    let q192 = await page.evaluate(a => a.innerText, q19b[9]);

    const q19c = await page.$x('//a');
    let q193 = await page.evaluate(a => a.innerText, q19c[13]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 19");
            const q19 = await pool.query(`delete from public.question where question = 'Who is the longest-serving non-royal leader in the world?'`);
            const q19p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q190}`), (`${q191}`), (`${q192}`), (`${q193}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/List_of_current_reigning_monarchs_by_length_of_reign");
    
    
    const q200 = "Who is the longest-serving monarch in the world?";

    const q20a = await page.$x('//a');
    let q201 = await page.evaluate(a => a.innerText, q20a[41]);

    const q20b = await page.$x('//a');
    let q202 = await page.evaluate(a => a.innerText, q20b[49]);

    const q20c = await page.$x('//a');
    let q203 = await page.evaluate(a => a.innerText, q20c[51]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 20");
            const q20 = await pool.query(`delete from public.question where question = 'Who is the longest-serving monarch in the world?'`);
            const q20p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q200}`), (`${q201}`), (`${q202}`), (`${q203}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})