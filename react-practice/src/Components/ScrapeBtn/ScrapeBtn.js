import React, { Component } from "react";
import ReactDOM from 'react-dom';
import API from "../../utils/API";


class ScrapeBtn extends Component {

handleClick = event => {
    event.preventDefault();
    console.log("Scraping Articles..ScrapeBtn.js");
    API.scrapeArticles({
        // username: this.state.username,
        // password: this.state.password,
        // email: this.state.email
    })
        // .then(res => console.log("you have registered!"))
        .then(res => console.log("Scraping finished"))
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