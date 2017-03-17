var http = require('https');

var bbc_news = function () { };
var api_key = "61af4ac7a45649a48cc04fa3174927b0";
var source = "bbc-news";
var sort = "top";
var api_dns = "https://newsapi.org/v1/articles?";

var address = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=";

bbc_news.prototype.GetNews = function (src, srt) {
    var response = "";
    if (!src) {
        src = source;
    }
    if (!srt) {
        srt = sort;
    }
    var http_request = build_http_request(src, srt);

    http.get(http_request, function (res) {
        var body = "";

        res.on('data', function (chunk) {
            body += chunk;
            console.log("Error, what kind of errors shall I handle", body);
        });

        res.on('end', function () {
            response = JSON.parse(body);
            console.log("Error, what kind of errors shall I handle", response);
            return response;
        });
    }).on('error', function (e) {
        console.log("Error, what kind of errors shall I handle", response);
    });

}

function build_http_request(src, srt)
{
    var http_request = api_dns + "source=" + src + "&sortBy=" + srt + "&apiKey=" + api_key;
    return http_request;
}
module.exports = new bbc_news();