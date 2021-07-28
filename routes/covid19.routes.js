const express = require('express');
// const someMiddleware = require('../Middleware/somemiddleware');
// const covid19Controller = require('../Controllers/someController');
const covid19Router = express.Router();
const fetch = require('node-fetch');
const path = require('path');

const static = path.join(__dirname, '../public');
//for rapid api authorization
const api_key = process.env.API_KEY;

covid19Router.get('/covidimage', async (request, response) => {
    const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=covid&mkt=en-US&count=10", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    });

    const covidImageResponse = await fetchApi.json();
    response.json(covidImageResponse);
});

covid19Router.post('/covidcountries', async (request, response) => {
    let date = request.body.date || '2020-07-21';//request.query;//2020-07-21 make sure to console.log this
    console.log(`Here is in covidcountries ${date}`);
    console.log(`Type is ${request.headers['content-type']}`);
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

covid19Router.get('/', async (req, res) => {
    res.render('covid19');
});

module.exports = covid19Router;