import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './Start.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'

function Start() {
  return (
    <div className="one">
      <div className="row">
        <h1 className="text-head"></h1>
        <div><h1 className="color">เกมใบ้คำ พัฒนาโดย React</h1></div>
      </div>
    </div>
  );
}
export default Start;
