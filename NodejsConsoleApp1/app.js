var http = require('https');
var news = require('./bbc_new_node.js');

/*var fact;
var url = 'http://bomapi-happycloud.rhcloud.com/v1/verses/Moroni/10/2';
console.log("Requesting url");
http.request(url, function (res) {
    var resultArray;
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log("Chunk" + chunk);
        if (chunk) {
            resultArray = JSON.parse('' + chunk);
        }
        else
            console.log("Nop");
    });
    res.on('end', function () {
        fact = resultArray[0].volume_title;
        console.log("Here's your fact: " + fact);
    });
}).end();*/
console.log("Starting logs");

/*var post_data = JSON.stringify({
    foo: "222"
})*/
var post_data = JSON.stringify({
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGM1NWY5OGM4MTBiNDA4NmIzYmY2ZWYiLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDQkNUE2OXZ0cE1sNGIxUFpGVi40bjBzLkt5ZjZkbzVyR3RkWUF0aWVxSVBtcG5JNXJyelpLTXUiLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJPJ0Nvbm5vciIsImVtYWlsIjoiam9obndvY29ubm9yQGNvbXBvc2UuaW8iLCJpYXQiOjE0ODk3NTUxNzN9.WRR2D6G7CZwEbrvSePhfTpK-k_My7LNT52VQoTXnbpo"
});
var options = {
    hostname: '192.168.1.8',
    port: '1880',
    path: '/test/token',
    method: 'GET',
    token: 'a',
    auth: 'token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGM1NWY5OGM4MTBiNDA4NmIzYmY2ZWYiLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDQkNUE2OXZ0cE1sNGIxUFpGVi40bjBzLkt5ZjZkbzVyR3RkWUF0aWVxSVBtcG5JNXJyelpLTXUiLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJPJ0Nvbm5vciIsImVtYWlsIjoiam9obndvY29ubm9yQGNvbXBvc2UuaW8iLCJpYXQiOjE0ODk3NTUxNzN9.WRR2D6G7CZwEbrvSePhfTpK-k_My7LNT52VQoTXnbpo',
    headers: {
        'Accepts': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGM1NWY5OGM4MTBiNDA4NmIzYmY2ZWYiLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDQkNUE2OXZ0cE1sNGIxUFpGVi40bjBzLkt5ZjZkbzVyR3RkWUF0aWVxSVBtcG5JNXJyelpLTXUiLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJPJ0Nvbm5vciIsImVtYWlsIjoiam9obndvY29ubm9yQGNvbXBvc2UuaW8iLCJpYXQiOjE0ODk3NTUxNzN9.WRR2D6G7CZwEbrvSePhfTpK-k_My7LNT52VQoTXnbpo'
    },

};
var optionsAuth = {
    hostname: '192.168.1.5',
    port: '1880',
    path: '/auth/token',
    method: 'POST',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accepts": "application/json",
        "Content-Length": Buffer.byteLength(post_data)
    },

};

var optionsBBC = {
    hostname: 'https://newsapi.org',
    path: '/v1/articles?source=bbc-news&sortBy=top&apiKey=61af4ac7a45649a48cc04fa3174927b0'
}

var news_feed = news.GetNews("bbc-news","top");
console.log("return " +news_feed);
/*var url = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=61af4ac7a45649a48cc04fa3174927b0';

http.get(url, function (res) {
    var body = '';

    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function () {
        var response = JSON.parse(body);
        console.log("Got a response: ", response);
    });
}).on('error', function (e) {
    console.log("Got an error: ", e);
});*/
/*var req = http.request(optionsBBC, function (res) {
    console.log('Status: ' );
    console.log('Status: ' + res.statusCode);
    console.log('Headers: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (body) {
        console.log('Body: ' + body);
    });
    res.on('end', function () {
        console.log("Saying stuff");
        //var speechOutput = "Andrea es la mejor del mundo";
        //var cardTitle = "Your Fact";
        //response.tellWithCard(speechOutput, cardTitle, speechOutput);
        //context.done(body);
    });
    res.on('error', function (e) {
        context.fail('error:' + e.message);
    });
});*/

//req.write(post_data);
//req.end();
// Create speech output
