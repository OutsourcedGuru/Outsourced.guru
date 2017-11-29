import React from 'react';
//import ReactDOM from 'react-dom';
import dataNews from './dataNews.json';

class News extends React.Component {
  constructor(props) {
    super(props);
    let indexLast = Object.keys(dataNews.topics).length - 1;
    this.state = {latest: dataNews.topics[indexLast]};
  }

  addItem(data) {
    this.setState({latest: data});
  }

  render() {
    return (
      this.state.latest
    );
  }
}

export default News;

