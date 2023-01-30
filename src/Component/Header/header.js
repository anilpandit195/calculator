import React from 'react'

import './header.css';
function header() {
  return (
    <div className="header custom-scroll">
      <div className="header_history">
        <p>10+4</p>
        <p>180*3</p>
        <p>150/2*7</p>
        <p>10+4</p>
        <p>180*3</p>
        <p>150/2*7</p>
        <p>10+4</p>
        <p>180*3</p>
      </div>
      <br/>
      <div className="header_expression custom-scroll">
        <p>30+40+834378289-3094898437289989786734878994847868437289948438289003098342809</p>
      </div>
      <p className="header_result">70</p>
    </div>
  )
}

export default header
