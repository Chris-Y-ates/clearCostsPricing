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
    await page.goto("https://companiesmarketcap.com/tech/largest-tech-companies-by-market-cap/");
    
    
    const q120 = "Which Tech Company is currently the Largest by Market-Cap?";

    const q12a = await page.$x('//div');
    let q121 = await page.evaluate(div => div.innerText, q12a[23]);

    const q12b = await page.$x('//div');
    let q122 = await page.evaluate(div => div.innerText, q12b[27]);

    const q12c = await page.$x('//div');
    let q123 = await page.evaluate(div => div.innerText, q12c[31]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 12");
            const q12 = await pool.query(`delete from public.question where question = 'Which Tech Company is currently the Largest by Market-Cap?'`);
            const q12p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q120}`), (`${q121}`), (`${q122}`), (`${q123}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/List_of_Formula_One_Grand_Prix_winners");
    
    
    const q130 = "Which Formula One Driver is the Most Successful Ever?";

    const q13a = await page.$x('//span');
    let q131 = await page.evaluate(span => span.innerText, q13a[29]);

    const q13b = await page.$x('//span');
    let q132 = await page.evaluate(span => span.innerText, q13b[34]);

    const q13c = await page.$x('//span');
    let q133 = await page.evaluate(span => span.innerText, q13c[38]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 13");
            const q13 = await pool.query(`delete from public.question where question = 'Which Formula One Driver is the Most Successful Ever?'`);
            const q13p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q130}`), (`${q131}`), (`${q132}`), (`${q133}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/Republican_Party_(United_States)");
    
    
    const q140 = "Who is the Most Recent US Supreme Court Justice appointed by the Republicans?";

    const q14a = await page.$x('//a');
    let q141 = await page.evaluate(a => a.innerText, q14a[1735]);

    const q14b = await page.$x('//a');
    let q142 = await page.evaluate(a => a.innerText, q14b[1733]);

    const q14c = await page.$x('//a');
    let q143 = await page.evaluate(a => a.innerText, q14c[1730]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 14");
            const q14 = await pool.query(`delete from public.question where question = 'Who is the Most Recent US Supreme Court Justice appointed by the Republicans?'`);
            const q14p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q140}`), (`${q141}`), (`${q142}`), (`${q143}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/Boxing_pound_for_pound_rankings");
    
    
    const q150 = "Who is the current No.1 Pound-for-Pound Boxer in the World?";

    const q15a = await page.$x('//a');
    let q151 = await page.evaluate(a => a.innerText, q15a[21]);

    const q15b = await page.$x('//a');
    let q152 = await page.evaluate(a => a.innerText, q15b[28]);

    const q15c = await page.$x('//a');
    let q153 = await page.evaluate(a => a.innerText, q15c[34]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 15");
            const q15 = await pool.query(`delete from public.question where question = 'Who is the current No.1 Pound-for-Pound Boxer in the World?'`);
            const q15p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q150}`), (`${q151}`), (`${q152}`), (`${q153}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.worldometers.info/demographics/life-expectancy/");
    
    
    const q160 = "Which Country has the highest average Life Expectancy at the moment?";

    const q16a = await page.$x('//a');
    let q161 = await page.evaluate(a => a.innerText, q16a[9]);

    const q16b = await page.$x('//a');
    let q162 = await page.evaluate(a => a.innerText, q16b[10]);

    const q16c = await page.$x('//a');
    let q163 = await page.evaluate(a => a.innerText, q16c[11]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 16");
            const q16 = await pool.query(`delete from public.question where question = 'Which Country has the highest average Life Expectancy at the moment?'`);
            const q16p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q160}`), (`${q161}`), (`${q162}`), (`${q163}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})