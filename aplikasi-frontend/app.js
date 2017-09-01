// direct aplikasi ke api server
var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var authServer = 'http://localhost:10000',
    penjualan = 'http://localhost:20000',
    penyewaan = 'http://localhost:30000';

app.all("/oauth/*", function(req, res) {
    console.log('redirecting to=> auth server');
    apiProxy.web(req, res, {target: authServer});
});


app.all("/penjualan/api/*", function(req, res) {
    console.log('redirecting to=> penyewaan server');
    apiProxy.web(req, res, {target: penjualan});
});

app.all("/penyewaan/api/*", function(req, res) {
    console.log('redirecting to=> penyewaan server');
    apiProxy.web(req, res, {target: penyewaan});
});

app.use(express.static(__dirname + '/dist'));
console.log("Running...");
app.listen(process.env.PORT || 3000);

