const PORT = process.env.PORT || 8000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const cors = require('cors')
app.use(cors())


const webpages = [{
    name: "ynet",
    address: "https://www.ynet.co.il/sport/worldsoccer",
}]



app.get("/", (req, res) => {
    webpages.forEach(webpage => {
        axios
        .get(webpage.address)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []
                $('div.slotView', html).each(function () {
                    const title = $(this).text();
                    const url = $(this).find('a').attr("href");
                    const img = $(this).find('img').attr('src');
                    articles.push({
                        title,
                        url,
                        img,
                        source: webpage.name
                    });
                });
                res.json(articles)
            }).catch((err) => console.log(err));
    });
})


app.listen(PORT, () => {
    console.log(`server runnig on PORT ${PORT}`);
});