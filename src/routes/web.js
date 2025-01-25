const express = require('express');
const Router = express.Router();
const fs = require('fs');

const countuser = () => {
    try {
        const fileread = JSON.parse(fs.readFileSync('./user.json', 'utf8'))
        fileread.count++;
        fs.writeFileSync('./user.json', JSON.stringify(fileread))
    } catch (error) {
        console.log('count error');
    }
}

Router.get('/api/v1/newcount', (req, res) => {
    countuser();
    res.setHeader('index', 'nofollow');
    res.send('ok')
})

Router.get('/chak/:ids', (req, res) => {
    // countuser();
    const { ids } = req.params;
    const decode = JSON.parse(atob(ids));
    res.setHeader('index', 'nofollow');
    res.cookie('_newtemp_', ids, { maxAge: 900000 });
    res.redirect(decode.redirect);
})


Router.get('/', (req, res) => {
    return res.render('home');
})
Router.get('/step-up-sip-calculatorn', (req, res) => {
    return res.render('other/step-up-sip-calculator');
})


Router.get('/loan-calculator', (req, res) => {
    return res.render('loan/loan-calculator');
})
Router.get('/loan/emi-calculator', (req, res) => {
    return res.render('loan/emi-calculator');
})
Router.get('/loan/car-loan-calculator', (req, res) => {
    return res.render('loan/car-loan-calculator');
})
Router.get('/loan/home-loan-calculator', (req, res) => {
    return res.render('loan/home-loan-calculator');
})
Router.get('/loan/personal-loan-calculator', (req, res) => {
    return res.render('loan/personal-loan-calculator');
})
Router.get('/loan/vehicle-loan-calculator', (req, res) => {
    return res.render('loan/vehicle-loan-calculator');
})
Router.get('/loan/student-loan-calculator', (req, res) => {
    return res.render('loan/student-loan-calculator');
})
Router.get('/loan/business-loan-calculator', (req, res) => {
    return res.render('loan/business-loan-calculator');
})
Router.get('/loan/fintechzoom-loan-calculator', (req, res) => {
    return res.render('loan/fintechzoom-loan-calculator');
})

Router.get('/stock/stock-profit-calculator', (req, res) => {
    return res.render('stock/stock-profit-calculator');
})
Router.get('/stock-average-calculator', (req, res) => {
    return res.render('stock/stock-average-calculator');
})
Router.get('/stock/stock-split-calculator', (req, res) => {
    return res.render('stock/stock-split-calculator');
})
Router.get('/stock/stock-dividend-calculator', (req, res) => {
    return res.render('stock/stock-dividend-calculator');
})

// web blog
Router.get('/blog', (req, res) => {
    return res.render('blog/blog');
})
Router.get('/emi-vs-sip-calculator', (req, res) => {
    return res.render('blog/emivssipcalculator');
})
Router.get('/blog/what-is-sip-calculator-and-how-does-it-work', (req, res) => {
    return res.render('blog/whatissipcalculatorandhowdoesitwork');
})
Router.get('/blog/how-can-you-make-the-best-use-of-a-sip-calculator', (req, res) => {
    return res.render('blog/howcanyoumakethebestuseofasipcalculator');
})
Router.get('/blog/how-an-sip-calculator-can-help-you-map-out-a-successful-investment-journey', (req, res) => {
    return res.render('blog/howansipcalculatorcanhelpyoumapoutasuccessfulinvestmentjourney');
})
Router.get('/blog/calculate-your-loan-easily-with-fintechzoom-loan-calculator', (req, res) => {
    return res.render('blog/calculateyourloaneasilywithfintechzoomloancalculator');
})
Router.get('/blog/fintechzoom-how-much-house-can-you-afford-with', (req, res) => {
    return res.render('blog/fintechzoomhowmuchhousecanyouaffordwith');
})
Router.get('/blog/easy-stock-split-calculator-for-investors', (req, res) => {
    return res.render('blog/EasyStockSplitCalculatorforInvestors');
})
Router.get('/blog/calculate-your-average-share-value-easily', (req, res) => {
    return res.render('blog/calculate-your-average-share-value-easily');
})
Router.get('/blog/simplify-mortgage-payments-with-fintechzoom-calculator', (req, res) => {
    return res.render('blog/simplify-mortgage-payments-with-fintechzoom-calculator');
})
Router.get('/blog/budgeting-tips-for-managing-your-fintechzoom-personal-loans', (req, res) => {
    return res.render('blog/budgeting-tips-for-managing-your-fintechzoom-personal-loans');
})
Router.get('/blog/how-to-estimate-tax-return', (req, res) => {
    return res.render('blog/how-to-estimate-tax-return');
})
Router.get('/blog/discover-benefits-of-open-banking-loans', (req, res) => {
    return res.render('blog/discover-benefits-of-open-banking-loans');
})
Router.get('/blog/discover-benefits-of-dscr-loan-in-florida', (req, res) => {
    return res.render('blog/discover-benefits-of-dscr-loan-in-florida');
})
Router.get('/blog/calculate-clock-time-easily-with-this-handy-tool', (req, res) => {
    return res.render('blog/calculate-clock-time-easily-with-this-handy-tool');
})
Router.get('/blog/how-to-write-an-effective-financing-statement', (req, res) => {
    return res.render('blog/how-to-write-an-effective-financing-statement');
})
Router.get('/blog/calculate-your-success-the-ultimate-commercial-loan-calculator', (req, res) => {
    return res.render('blog/calculate-your-success-the-ultimate-commercial-loan-calculator');
})
Router.get('/blog/fintechzoom-dax40-guide-how-to-start-trading-dax', (req, res) => {
    return res.render('blog/fintechzoom-dax40-guide-how-to-start-trading-dax');
})

// web page
Router.get('/about-us', (req, res) => {
    return res.render('site-pages/about-us');
})
Router.get('/contact-us', (req, res) => {
    return res.render('site-pages/contact-us');
})
Router.get('/disclaimer', (req, res) => {
    return res.render('site-pages/disclaimer');
})
Router.get('/privacy-policy', (req, res) => {
    return res.render('site-pages/privacy-policy');
})
Router.get('/404', (req, res) => {
    return res.render('site-pages/404');
})
module.exports = Router;