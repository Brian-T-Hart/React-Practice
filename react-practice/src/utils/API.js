import axios from "axios";

export default {

    // Saves a Account to the database
    scrapeArticles: function (Data) {
        console.log("scraping articles..API.js");
        return axios.post("/scrape", Data);
    }
};
