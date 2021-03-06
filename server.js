var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/',function(req,res){
	console.log("in the home	");
})
app.get('/scrape', function(req, res){
    // The URL we will scrape from - in our example Anchorman 2.

   // url = 'http://www.imdb.com/title/tt1229340/';
	 url = 'https://www.boc.web.lk/ExRates';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var body = cheerio.load(html);

            // Finally, we'll define the variables we're going to capture
	    console.log('no errors found yet');
            var title, release, rating;
            var jason = { title : "", release : "", rating : ""};

		body('table').filter(function(){
		
				var data=body(this);
				var children = data.children();
				var title=data.children().first().text();
				jason.title=title;
				console.log(data);

			               	}
		)
        }
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
