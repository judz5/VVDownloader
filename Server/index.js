const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const path = require('path')
const app = express();
const PORT = 4000;

app.use(cors());
app.listen(PORT, () => {
    console.log('Server Works !!! At port 4000');
});

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,"../index.html"))
    app.use(express.static(path.join(__dirname, "../public")))
});

app.get('/download', (req,res) => {
    var URL = req.query.URL;

    res.header('Content-Disposition', 'attachment; filename=video.mp4');

    ytdl(URL, {
    format: 'mp4'
    }).pipe(res);
});

