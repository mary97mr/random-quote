import './App.sass';
import React, { Component } from 'react';
import $ from "jquery"

//Variables
const colors = [
  "#006d77",
  "#8d99ae",
  "#f6bd60",
  "#f28482",
  "#b08968",
  "#8a817c",
  "#d4e09b",
  "#f28f3b",
  "#723d46",
  "#50514f",
  "#e63946",
  "#f77f00",
];

const baseURL = "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const random = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      text: "",
      author: "",
      color: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: "GET",
      url: baseURL,
      dataType: "json"
    })
    .done(data => {
      const randomQuote = random(data.quotes);
      const color = random(colors);
      document.body.style.backgroundColor = color;
      this.setState({
        quotes: data.quotes,
        text: randomQuote.quote,
        author: randomQuote.author,
        color
      });
    });
  }

  handleClick(e) {
    e.preventDefault();
    const randomQuote = random(this.state.quotes);
    const color = random(colors);
    document.body.style.backgroundColor = color;
    this.setState({
      text: randomQuote.quote,
      author: randomQuote.author,
      color
    });
  }

  render() {
    //Href for Twitter share button
    const href = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent(`"${this.state.text}" ${this.state.author}`);

    const { color, text, author } = this.state;

    //Style for buttons background
    const buttonColor = {
      backgroundColor: color,
      borderCorlor: color
    }

    return (
      <div className="row">
        <div id="quote-box" className="card">
          <blackquote className="blackquote">
            <p style={{color}} id="text" className="text-center fs-2 fw-light">
              <i className="fas fa-quote-left fs-3 me-3"></i> {text}
            </p>
          </blackquote>
          <figcaption style={{color}} className="blackquote-footer text-end" id="author">
            {author}
          </figcaption>
          <div className="d-flex justify-content-between">
            <a href={href} target="_top" className="btn" style={buttonColor}><i class="fab fa-twitter"></i></a>
            <button
              style={buttonColor}
              className="btn"
              onClick={this.handleClick}
              target="_blank"
              id="new-quote"
              >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
