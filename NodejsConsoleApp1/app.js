var http = require('https');
var GetNews = require('./bbc_new_node.js');

console.log("Starting logs");

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
GetNews("bbc-news", "top")
.then((response) => {
  console.log(response)
})
.catch((err) => {
  console.log(err)
})

console.log("Esto se ejecuta antes que lo de dentro del callback pq el callback es asincrono y necesita bajar todos los datos")
