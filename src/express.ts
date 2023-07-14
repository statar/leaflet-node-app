const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});
app.use(connectLiveReload());

// Serve the static files
// app.use(express.static(path.join(__dirname, '/build')));


// Route for serving the index.html file
app.get('/', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/build/index.js', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../build/index.js'));
});


app.get('/build/browserify_modules.js', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../build/browserify_modules.js'));
});

app.get('/build/b_index.js', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../build/b_index.js'));
});

app.get('/build/map.js', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../build/map.js'));
});

app.get('/leaflet.css', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../leaflet.css'));
});

app.get('/leaflet', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../node_modules/leaflet'));
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
