import React, { Component } from 'react';
import moment from "moment";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>YOU'RE RUINING MY COTTAGECORE VIBE</h1>
        <h2>Philza Minecraft 2021</h2>
        <div>
          <h3>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>  
        </div> 
      </div>
    );
  }
}
