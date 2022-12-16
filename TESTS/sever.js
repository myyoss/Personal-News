// const PORT = process.env.PORT || 8000;
// const express = require("express");
// const axios = require("axios");
// const cheerio = require("cheerio");

// const app = express();


// // const webpages = [{
// //     name: "billboard",
// //     address: "https://www.ynet.co.il/sport/worldsoccer",
// // }]

// // const articles = [];

// // webpages.forEach(webpage => {
// //     axios
// //         .get(webpage.address)
// //         .then((res) => {
// //             const html = res.data
// //             const $ = cheerio.load(html)
// //             $('div.slotView', html).each(function () {
// //                 const title = $(this).text();
// //                 const url = $(this).find('a').attr("href");
// //                 const img = $(this).find('img').attr('src');
// //                 articles.push({
// //                     title,
// //                     url,
// //                     img,
// //                     source: webpage.name
// //                 });
// //             });
// //         }).catch((err) => console.log(err));
// // });


// // app.get("/", (req, res) => {
// //     res.json(articles);
// //     // res.send(articles);
// // })
 

// app.listen(PORT, () => {
//     console.log(`server runnig on PORT ${PORT}`);
// });