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
    await page.goto("https://wpbsa.com/about-us/records/147-breaks/");
    
    const q10 = "In Snooker, who currently holds a record for making a competitive break in excess of 147 points?";

    const q1a = await page.$x('//td');
    let q11 = await page.evaluate(td => td.textContent, q1a[1009]);

    const q1b = await page.$x('//td');
    let q12 = await page.evaluate(td => td.textContent, q1b[1011]);

    const q1c = await page.$x('//td');
    let q13 = await page.evaluate(td => td.textContent, q1c[997]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 1");
            const q1 = await pool.query(`delete from public.question where question = 'In Snooker, who currently holds a record for making a competitive break in excess of 147 points?'`);
            const q1p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q10}`), (`${q11}`), (`${q12}`), (`${q13}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("http://www.mtv.co.uk/music/charts/the-official-uk-top-40-singles-chart");
    
    const q20 = "Which Artist is currently top of the UK Charts?";

    const q2a = await page.$x('//p');
    let q21 = await page.evaluate(p => p.innerHTML, q2a[1]);

    const q2b = await page.$x('//p');
    let q22 = await page.evaluate(p => p.innerHTML, q2b[2]);

    const q2c = await page.$x('//p');
    let q23 = await page.evaluate(p => p.innerHTML, q2c[3]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 2");
            const q2 = await pool.query(`delete from public.question where question = 'Which Artist is currently top of the UK Charts?'`);
            const q2p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q20}`), (`${q21}`), (`${q22}`), (`${q23}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/List_of_prime_ministers_of_Japan");
    
    const q30 = "Who is the Current Prime Minister of Japan?";

    const q3a = await page.$x('//a');
    let q31 = await page.evaluate(a => a.innerHTML, q3a[552]);

    const q3b = await page.$x('//a');
    let q32 = await page.evaluate(a => a.innerHTML, q3b[539]);

    const q3c = await page.$x('//a');
    let q33 = await page.evaluate(a => a.innerHTML, q3c[533]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 3");
            const q3 = await pool.query(`delete from public.question where question = 'Who is the Current Prime Minister of Japan?'`);
            const q3p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q30}`), (`${q31}`), (`${q32}`), (`${q33}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.worldometers.info/world-population/population-by-country/");
    
    const q40 = "What Country is the Current Most-Populous in the World?";

    const q4a = await page.$x('//a');
    let q41 = await page.evaluate(a => a.innerHTML, q4a[8]);

    const q4b = await page.$x('//a');
    let q42 = await page.evaluate(a => a.innerHTML, q4b[9]);

    const q4c = await page.$x('//a');
    let q43 = await page.evaluate(a => a.innerHTML, q4c[10]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 4");
            const q4 = await pool.query(`delete from public.question where question = 'What Country is the Current Most-Populous in the World?'`);
            const q4p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q40}`), (`${q41}`), (`${q42}`), (`${q43}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/List_of_largest_companies_by_revenue");
    
    const q50 = "Which Company generates the Highest Revenue in the World?";

    const q5a = await page.$x('//a');
    let q51 = await page.evaluate(a => a.innerHTML, q5a[22]);

    const q5b = await page.$x('//a');
    let q52 = await page.evaluate(a => a.innerHTML, q5b[27]);

    const q5c = await page.$x('//a');
    let q53 = await page.evaluate(a => a.innerHTML, q5c[32]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 5");
            const q5 = await pool.query(`delete from public.question where question = 'Which Company generates the Highest Revenue in the World?'`);
            const q5p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q50}`), (`${q51}`), (`${q52}`), (`${q53}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.superleague.co.uk/stats");
    
    const q60 = "Who is the Highest Scoring Rugby League Player this year?";

    const q6a = await page.$x('//td');
    let q61 = await page.evaluate(td => td.innerText, q6a[1]);

    const q6b = await page.$x('//td');
    let q62 = await page.evaluate(td => td.innerText, q6b[24]);

    const q6c = await page.$x('//td');
    let q63 = await page.evaluate(td => td.innerText, q6c[47]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 6");
            const q6 = await pool.query(`delete from public.question where question = 'Who is the Highest Scoring Rugby League Player this year?'`);
            const q6p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q60}`), (`${q61}`), (`${q62}`), (`${q63}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/Production_car_speed_record");
    
    const q70 = "What is the Fastest Street-Legal Car in the World?";

    const q7a = await page.$x('//td');
    let q71 = await page.evaluate(td => td.innerText, q7a[103]);

    const q7b = await page.$x('//td');
    let q72 = await page.evaluate(td => td.innerText, q7b[97]);

    const q7c = await page.$x('//td');
    let q73 = await page.evaluate(td => td.innerText, q7c[91]);

    (async () => {
        try {
            await pool.connect();
            console.log("connection established question 7");
            const q7 = await pool.query(`delete from public.question where question = 'What is the Fastest Street-Legal Car in the World?'`);
            const q7p = await pool.query(`insert into public.question (question, correctanswer, option1, option2) values ($1, $2, $3, $4)`, [(`${q70}`), (`${q71}`), (`${q72}`), (`${q73}`)]);
            
        } catch (error) {
            console.log(error);
        }
        
        
    })();

    await browser.close();

})();

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})
