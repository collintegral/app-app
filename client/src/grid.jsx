import React, { Component } from 'react';
import '../public/assets/css/style.css';

class Grid extends Component {
  render() {
    return (
<div id="grid" className="container is-mobile">

        <div className="cell cell-1">1</div>
        <div className="cell cell-2">2</div>
        <div className="cell cell-3">3</div>
        <div className="cell cell-4">4</div>
        <div className="cell cell-5">5</div>
        <div className="cell cell-6">6</div>
        <div className="cell cell-7">7</div>
        <div className="cell cell-8">8</div>
        <div className="cell cell-9">9</div>

  </div>
    )
  }
}
export default Grid;