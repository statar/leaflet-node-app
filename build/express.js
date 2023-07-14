"use strict";
var express = require('express');
var path = require('path');
var app = express();
var port = 3000;
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");
var liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", function () {
    setTimeout(function () {
        liveReloadServer.refresh("/");
    }, 100);
});
app.use(connectLiveReload());
// Serve the static files
// app.use(express.static(path.join(__dirname, '/build')));
// Route for serving the index.html file
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/build/index.js', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.js'));
});
app.get('/build/browserify_modules.js', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/browserify_modules.js'));
});
app.get('/build/b_index.js', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/b_index.js'));
});
app.get('/build/map.js', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/map.js'));
});
app.get('/leaflet.css', function (req, res) {
    res.sendFile(path.join(__dirname, '../leaflet.css'));
});
app.get('/leaflet', function (req, res) {
    res.sendFile(path.join(__dirname, '../node_modules/leaflet'));
});
// Start the server
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
//# sourceMappingURL=express.js.map