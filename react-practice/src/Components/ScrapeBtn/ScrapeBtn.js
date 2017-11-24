import React, { Component } from "react";
import ReactDOM from 'react-dom';
import API from "../../utils/API";

class ScrapeBtn extends Component {

handleClick = event => {
    event.preventDefault();
    console.log("Scraping Articles..ScrapeBtn.js");
    API.scrapeArticles()
        .then(res => console.log("response to scrapeArticles..ScrapeBtn.js"))
        // .then(res => this.setState({ articles: res.data }))
        .catch(err => console.log(err));
    }

render() {
    return(
        <div className="ScrapeBtnDiv">
        <button className="btn btn-primary" onClick={this.handleClick}>Scrape Articles</button>
        </div>
    )}
}

export default ScrapeBtn;