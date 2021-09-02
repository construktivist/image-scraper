const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const parse = require('csv-parse');

pages.forEach(url => {
    scrape(url);
});

function scrape(url) {
    
    request(url, function(error, response, html){
        
        error ? console.log(error) : console.log('CHEERIO SUCCESS');
        const $ = cheerio.load(html);
        const og_image_url = $('meta[property="og:image"]').attr('content');
        saveImage(og_image_url);

    
    });
}

function saveImage(url) {

    const fileName = url.replace(/^.*[\\\/]/, '').replace('#keepProtocol', '')
    const path = `./images/${fileName}`;

    console.log(path);

    request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', () => console.log("Done!"));
}