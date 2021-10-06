import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
              <img alt="note10" src="https://phoneaqua.com/products/Samsung-Galaxy-Note-10-Plus%205G%20Price.webp"/>
              <div className="caption">
                  <h3>Samsung note 10</h3>
                  <p>
                      20.000.000
                  </p>
                  <p>
                      <a className="btn btn-success">BUY</a>
                  </p>
              </div>
          </div>
      </div>
      
    );
  }
}


export default Product;
