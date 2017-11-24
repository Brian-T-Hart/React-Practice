const db = require("../models");
import axios from "axios";

// Defining methods for the booksController
module.exports = {
    
    scrape: function (req, res) {
        console.log("Scrape made it to articleController.js");
        axios.get("/api/articles/scrape", function (req, res) {
            request("https://www.nytimes.com/", function (error, response, html) {
                var $ = cheerio.load(html);
                $("article").each(function (i, element) {
                    var result = {};
                    result.title = $(this).children(".story-heading").text();
                    result.link = $(this).children("a").attr("href");
                    result.summary = $(this).children("p.summary").text();
                    var entry = new Article(result);
                    entry.save(function (err, doc) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log(doc);
                        }
                    });
                });
            });
            res.json(response)
        });
    },

    findAll: function (req, res) {
        db.Article
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Article
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Article
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Article
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Article
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
