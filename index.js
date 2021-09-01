const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

function scrape(url) {
    
    request(url, function(error, response, html){
        
        error ? console.log(error) : console.log('CHEERIO SUCCESS');
        const $ = cheerio.load(html);
        const og_image = $('meta[property="og:image"]').attr('content');
        console.log(og_image);
    
    });
}

scrape('https://www.kasasa.com/exchange/articles/seasonal-campaigns');