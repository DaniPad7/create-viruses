if (process.env.NODE_ENV !== 'production')
    require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const port = 3000;
const fetch = require('node-fetch');

// app.set('views', './views');
// app.set('view engine', 'pug');

app.use(express.static('public'));
app.use('/', router);


//for cookies npm install -S cookie-parser
//for scaffold npm install --S express-scaffold


//Ok we can use res.render to render a pug with script src = ${http:localhost}
//one of our own get endpoint to return a JS file with res.sendFile(path,options, fn)
//we also have res.get('COntent-Type') and res.set('Content-Type', 'text/plain')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const api_key = process.env.API_KEY;

// router.get('/', (request, response) => {
//     response.sendFile('index.html');
// });

router.get('/covidimage', async (request, response) => {
    const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=covid&mkt=en-US&count=10", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    });

    const covidImageResponse = await fetchApi.json();
    console.log(covidImageResponse);
    response.json(covidImageResponse);
});

router.get('/covidcountries', async (request, response) => {
    let date = '2020-07-21';//request.query;//2020-07-21 make sure to console.log this
    //a;so request.param() is very versatile asw ell
    const fetchApi = await fetch(`https://covid-19-data.p.rapidapi.com/report/totals?date=${date}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
        }
    });

    const covidCountryResponse = await fetchApi.json();
    console.log(covidCountryResponse);
    response.json(covidCountryResponse);
});

router.post('/login', (request, response) => {
    let username = request.body.user;
    let password = request.bosy.password;
    console.log(`Username = ${username}, password is ${password}`);
    response.end('yes');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});