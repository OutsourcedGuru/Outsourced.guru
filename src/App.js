import React, { Component } from 'react';
import './App.css';
import News from './News.js';

class App extends Component {
  addNewsFeedItem() {
    News.addItem("A day without news is like a fish without a bicycle");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"><h1 className="App-title">Outsourced.guru</h1></header>
        <div className="container">
          <h5>Start</h5>

          <img className="prof" alt="profile" />
          <div className="right"><h2>Michael</h2><p>Blankenship</p></div>

          <div className='spacer'>
            <a href="" className='wide blue' onClick={this.addNewsFeedItem}>
              <i className="icon-home" /><h2>Show Desktop</h2>
            </a>
            <a href="" className='wide orange' onClick={() => alert("Settings")}>
              <i className="icon-cog" /><h2>Settings</h2>
            </a>
            <a href="" className='box red' onClick={() => alert("Camera")}>
              <i className="icon-camera" /><h2>Camera</h2>
            </a>
            <a href="" className='box lime' onClick={() => alert("Favorite")}>
              <i className="icon-heart" /><h2>Favorite</h2>
            </a>
            <a href="" className='box bluefish' onClick={() => alert("Twitter")}>
              <i className="icon-twitter" /><h2>Twitter</h2>
            </a>
            <a href="" className='box yellow' onClick={() => alert("Places")}>
              <i className="icon-map-marker" /><h2>Places</h2>
            </a>
            <a href="" className='box red' onClick={() => alert("Browser")}>
              <i className="icon-globe" /><h2>Browser</h2>
            </a>
            <a href="" className='box orange' onClick={() => alert("Email")}>
              <i className="icon-envelope-alt" /><h2>E-mail</h2>
            </a>
            <a href="" className='wide blue cal_e' onClick={() => alert("Calendar")}>
              <h5>11</h5><p>Wednesday</p>
              <h2 className="top cal_i">Anniversary Party at 07:00 PM</h2>
              <i className="icon-calendar" />
            </a>
            <a href="" className='box lime' onClick={() => alert("SkyDrive")}>
              <i className="icon-cloud" /><h2>SkyDrive</h2>
            </a>
            {/* ------- Focus -------------------------------------------- */}
            <a href="" className='wide blue' onClick={() => alert("Output")}>
              <div id="divNews"><News /></div><h2>News</h2>
            </a>
            {/* ----------------------------------------------------------- */}
          </div>

          <div className='spacer spacer3x'>
            <a href="" className='box blue' onClick={() => alert("Facebook")}>
              <i className="icon-facebook" /><h2>Facebook</h2>
            </a>
            <a href="" className='box bluefish' onClick={() => alert("FaceTime")}>
              <i className="icon-facetime-video" /><h2>FaceTime</h2>
            </a>
            <a href="" className='box red' onClick={() => alert("Task")}>
              <i className="icon-tasks" /><h2>Task</h2>
            </a>
            <a href="" className='box magenta' onClick={() => alert("Explorer")}>
              <i className="icon-list-alt" /><h2>Windows Explorer</h2>
            </a>
            <a href="" className='wide yellow' onClick={() => alert("Media")}>
              <i className="icon-play" /><h2>Media</h2>
            </a>
          </div>

        {/* <div className="container"> */}
        </div>

      {/* <div className="App"> */}
      </div>
    );
  }
}

export default App;
