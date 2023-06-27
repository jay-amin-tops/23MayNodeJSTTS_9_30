
const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

const tempOverview = fs.readFileSync(
    `${__dirname}/templates/template-overview.html`,
    'utf-8'
);
const tempCard = fs.readFileSync(
    `${__dirname}/templates/template-card.html`,
    'utf-8'
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// console.log("JSON file read",data[0].productName);
const dataObj = JSON.parse(data);
console.log("JSON file read", dataObj[0].productName);
var myCss = {
    style : fs.readFileSync('./style.css','utf8')
};

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    // Overview page
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        // const cardsHtml = dataObj.map(el => replaceTemplate(`<figure class="card">
        // <div class="card__emoji">${el.productName}</div></figure>`, el)).join('');
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.end(output);

        // const MyTitle = "TOPS Technologies";
        // const output = tempOverview.replace('{%Data%}', "TOPS Technologies");
        // const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        // console.log(cardsHtml);
        // const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        // res.end(output);

    } else if (pathname === "/about") {
        console.log("about us log");
        // res.writeHead(200, {
        //     'Content-type': 'text/html'
        // });
        res.end("output");
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
