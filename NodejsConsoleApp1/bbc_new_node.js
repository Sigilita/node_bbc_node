var http = require('https');
var bbc_news = function () { };
var api_key = "61af4ac7a45649a48cc04fa3174927b0";
var source = "bbc-news";
var sort = "top";
var api_dns = "https://newsapi.org/v1/articles?";

var address = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=";


module.exports = (src, srt) => {
  return new Promise((resolve, reject) => {
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
        });

        res.on('end', function () {
            response = JSON.parse(body);
            resolve(response);
        });
    }).on('error', function (e) {
        return reject(e)
    });
  })
}

function build_http_request(src, srt)
{
    var http_request = api_dns + "source=" + src + "&sortBy=" + srt + "&apiKey=" + api_key;
    return http_request;
}
