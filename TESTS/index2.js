// const PORT = process.env.PORT || 8000;
// const express = require("express");
// const axios = require("axios");
// const cheerio = require("cheerio");


// // import express from 'express'
// // import axios from 'axios'
// // import cheerio from 'cheerio';

// const app = express();


// const webpages = [{
//         name: "billboard",
//         address: "https://www.ynet.co.il/sport/worldsoccer"
//     },
//     //     name: "billboard",
//     //     address: "https://www.billboard.com/c/music/"
//     // },
//     // {
//     //     name: "loudwire",
//     //     address: "https://loudwire.com/category/news/"
//     // },
//     // {
//     //     name: "hiphopdx",
//     //     address: "https://hiphopdx.com/news"
//     // },
//     // {
//     //     name: "ultimateclassicrock",
//     //     address: "https://ultimateclassicrock.com/category/news/"
//     // },
//     // {
//     //     name: "metalunderground",
//     //     address: "http://www.metalunderground.com/news/"
//     // },
//     // {
//     //     name: "edm",
//     //     address: "https://edm.com/news"
//     // },
//     // {
//     //     name: "xxlmag",
//     //     address: "https://www.xxlmag.com/category/news/"
//     // },
//     // {
//     //     name: "nme",
//     //     address: "https://www.nme.com/newsroom"
//     // },
//     // {
//     //     name: "edm",
//     //     address: "https://edm.com/news"
//     // },
//     // {
//     //     name: "louderthanwar",
//     //     address: "https://louderthanwar.com/news/"
//     // },
//     // {
//     //     name: "uncut",
//     //     address: "https://www.uncut.co.uk/news/"
//     // },
//     // {
//     //     name: "noisecreep",
//     //     address: "https://noisecreep.com/category/news/?nav"
//     // },
//     // {
//     //     name: "altpress",
//     //     address: "https://www.altpress.com/category/music/"
//     // },
//     // {
//     //     name: "edmnations",
//     //     address: "https://edmnations.com/category/news/"
//     // },
//     // {
//     //     name: "top40-charts",
//     //     address: "https://top40-charts.com/news.php"
//     // },
//     // {
//     //     name: "themusic",
//     //     address: "https://themusic.com.au/news"
//     // }, 
//     // {
//     //     name: "music-news",
//     //     address: "https://www.music-news.com/news",
//     // },
//     // {
//     //     name: "nytimes",
//     //     address: "https://www.nytimes.com/search?query=music",
//     // },
//     // {
//     //     name: "reuters",
//     //     address: "https://www.reuters.com/site-search/?query=music",
//     // },
//     // {
//     //     name: "abcnews",
//     //     address: "https://abcnews.go.com/search?searchtext=music",
//     // },
//     // {
//     //     name: "theguardian",
//     //     address: "https://www.theguardian.com/music",
//     // },
//     // {
//     //     name: "thesun",
//     //     address: "https://www.thesun.co.uk/?s=music",
//     // },
//     // {
//     //     name: "time",
//     //     address: "https://time.com/search/?q=music",
//     // },
//     // {
//     //     name: "cbsnews",
//     //     address: "https://www.cbsnews.com/detroit/entertainment/",
//     // }

// ]

// const articles = [];


// // const fetch = async () => {
// //     try {
// //         const response = await axios.get('https://www.ynet.co.il/sport/worldsoccer')
// //         const html = response.data
// //         const $ = cheerio.load(html)
// //         const games = []

// //         $('div.slotView').each((index, el) => {
// //             const game = $(el)
// //             const img = game.find('img').attr('src')
// //             const title = game.text()
// //             const a = game.find('a').attr('href')

// //             games.push(img,title,a)
// //         })
// //         return games
// //     } catch (err) {
// //         console.error('err')
// //     }
// // }
// // fetch().then(games => console.log(games))

// webpages.forEach(webpage => {
//     axios
//         .get(webpage.address)
//         .then((res) => {
//             const html = res.data
//             const $ = cheerio.load(html)

//             $('div.slotView', html).each(function () {
//                 const title = $(this).text();
//                 const url = $(this).find('a').attr("href");
//                 const img = $(this).find('img').attr('src')

//                 // console.log(title)
//                 articles.push({
//                     title,
//                     url,
//                     img,
//                     source: webpage.name
//                 });
//             });
//         }).catch((err) => console.log(err));
// });


// app.get("/", (req, res) => {
//     res.json(articles);
//     console.log(articles)
// })

// // app.get("/:webpageId", (req, res) => {
// //     const webpageId = req.params.webpageId
// //     const WebpagesAddress = webpages.filter(webpage => webpage.name === webpageId)[0].address

// //     axios
// //         .get(WebpagesAddress)
// //         .then((response) => {
// //             const html = response.data
// //             const $ = cheerio.load(html)
// //             const newArticles = []

// //             $('a:contains("Bob")', html).each(function () {
// //                 const title = $(this).text();
// //                 const url = $(this).attr("href");
// //                 const img = $(this).find('img').attr('src');

// //                 newArticles.push({
// //                     title,
// //                     url,
// //                     img
// //                 });
// //             });
// //             res.json(newArticles)
// //         }).catch((err) => console.log(err));
// // })



// app.listen(PORT, () => {
//     console.log(`server runnig on PORT ${PORT}`);
// });