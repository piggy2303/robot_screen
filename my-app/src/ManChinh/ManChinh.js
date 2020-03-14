import React, { Component } from "react";
// import logo from "./logo.svg";
import "./ManChinh.css";
import { data_man_chinh } from "../data/data";
import url from "../url";
import SwiftSlider from "react-swift-slider";

class Manchinh extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, data_success: false };
  }

  thuyet_minh = id => {
    fetch(url.thuyet_minh + "?id=" + id)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(Error => console.log(Error));
  };

  ren_data = () => {
    let data = [
      { text: "Hà Nội", data: 40 },
      { text: "Việt Nam", data: 400 },
      { text: "Thế giới", data: 44400 }
    ];

    return data.map(item => (
      <div
        className="col-md-4 col-sm-6 portfolio-item"
        onClick={() => {
          // this.thuyet_minh(item.id);
          // this.props.click_chi_tiet(item);
        }}
      >
        <div className="portfolio-item-coro">
          <div className="portfolio-caption-top">
            <h1 className="text-ca-nhiem">{item.data}</h1>
          </div>
          <div className="portfolio-caption">
            <h4>{item.text}</h4>
          </div>
        </div>
      </div>
    ));
  };

  ren_data_bottom = () => {
    let data = [
      { quoc_gia: "Trung Quốc", ca_nhiem: 40, tu_vong: 40 },
      { quoc_gia: "Trung Quốc", ca_nhiem: 40, tu_vong: 40 },
      { quoc_gia: "Trung Quốc", ca_nhiem: 40, tu_vong: 40 },
      { quoc_gia: "Trung Quốc", ca_nhiem: 40, tu_vong: 40 },
      { quoc_gia: "Trung Quốc", ca_nhiem: 40, tu_vong: 40 },
      { quoc_gia: "Trung Quốc", ca_nhiem: 40, tu_vong: 40 },
      { quoc_gia: "Trung Quốc", ca_nhiem: 40, tu_vong: 40 },
      { quoc_gia: "Trung Quốc", ca_nhiem: 40, tu_vong: 40 }
    ];

    let style_0 = {
      display: "flex",
      flexDirection: "column",
      flex: 1.5,
      marginTop: 10
    };

    let style_1 = {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      marginTop: 10
    };

    return (
      <div className="col-md-6 col-sm-6 portfolio-item">
        <div className="portfolio-item-coro">
          <div className="portfolio-caption">
            <h2>Tình hình nCoV thế giới</h2>
            <div
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                flex: 1
              }}
            >
              <div style={style_0}>
                <h3>Quốc gia</h3>
                {data.map(item => (
                  <h5>{item.quoc_gia}</h5>
                ))}
              </div>
              <div style={style_1}>
                <h3>Ca nhiễm</h3>
                {data.map(item => (
                  <h5>{item.ca_nhiem}</h5>
                ))}
              </div>
              <div style={style_1}>
                <h3>Tử vong</h3>
                {data.map(item => (
                  <h5>{item.tu_vong}</h5>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div id="page-top">
        <section className="bg-light page-section" id="portfolio">
          <div className="container">
            <div className="row">{this.ren_data()}</div>
            <div className="row">{this.ren_data_bottom()}</div>
          </div>
        </section>
        <div onClick={() => this.props.go_chuc_nang()}>
          <img
            className="anh-thu-tuong-1"
            src="https://brcast-msg-photo.zadn.vn/1409707819560034765/67ec362a9f6f76312f7e.jpg"
          ></img>
        </div>
      </div>
    );
  }
}

export default Manchinh;
