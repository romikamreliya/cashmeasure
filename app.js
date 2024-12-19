require('app-module-path').addPath(__dirname);
const express = require('express')
const cookieParser = require('cookie-parser');
const spdy = require('spdy');
const fs = require('fs');

const app = express()
const port = 7000

app.use('/', (req, res, next) => {
    // res.set("Content-Security-Policy", "default-src 'self'");
    
    const temp = { ischack: false }
    if (req.header('cookie')?.includes('_newtemp_=')) {
        temp.ischack = true;
    }
    res.locals = temp;
    next();
})

// public folder
app.use(express.static('public'))
app.use(cookieParser())

// ejs setup
const ejs = require('ejs')
const path = require('path')
app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

// Route
app.use('/', require('src/routes/web.js'))

app.use((req, res, next) => {
    return res.status(404).render('site-pages/404');
})

// start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// const server = spdy.createServer(
//     {
//         key: fs.readFileSync(`private-key.pem`),
//         cert: fs.readFileSync(`public-cert.pem`),
//     },app
// );
// server.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });