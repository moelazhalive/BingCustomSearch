var request = require("request");

var subscriptionKey = '##';
var customConfigId = '##';
var searchTerm = 'morocco';

var options = {
    url: 'https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?' + 
      'q=' + searchTerm + 
      '&customconfig=' + customConfigId,
    headers: {
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
}

request(options, function(error, response, body){
    var searchResponse = JSON.parse(body);
    for(var i = 0; i < searchResponse.webPages.value.length; ++i){
        var webPage = searchResponse.webPages.value[i];
        console.log('name: ' + webPage.name);
        console.log('url: ' + webPage.url);
        console.log('displayUrl: ' + webPage.displayUrl);
        console.log('snippet: ' + webPage.snippet);
        console.log('dateLastCrawled: ' + webPage.dateLastCrawled);
        console.log();
    }
})