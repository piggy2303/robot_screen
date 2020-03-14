import React, { Component } from "react";
// import logo from "./logo.svg";
import "./ManChiTiet.css";
import SwiftSlider from "react-swift-slider";
import url from "../url";

class Manchinh extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rootmanchinh">
        <div className="overlay"></div>
        {/* <img  src={this.props.data.thumbnail} /> */}
        <div className="anh-thu-tuong">
          <SwiftSlider
            data={this.props.data.list_img}
            enableNextAndPrev={false}
            height={800}
            enableNextAndPrev={true}
            interval={3000}
          />
        </div>

        <div className="masthead">
          <div className="masthead-bg"></div>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-10 my-auto">
                <div className="masthead-content text-white py-5 py-md-0">
                  <h3 className="mb-4">{this.props.data.title_vi}</h3>
                  <p
                    className="mb-5"
                    unselectable="on"
                    onselectstart="return false;"
                    onmousedown="return false;"
                  >
                    {this.props.data.detail_vi}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-back">
          <div className="btn-child" onClick={() => this.props.click_back()}>
            <i className="fas fa-times fa-2x"></i>
            <p>Trở về</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Manchinh;
