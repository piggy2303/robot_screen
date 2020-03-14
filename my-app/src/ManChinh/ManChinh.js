import React, { Component } from "react";
// import logo from "./logo.svg";
import "./ManChinh.css";
import { data_man_chinh, data_img_text } from "../data/data";
import url from "../url";
import SwiftSlider from "react-swift-slider";

class Manchinh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      data_success: false
    };
  }

  componentDidMount() {
    fetch(url.get_data)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (data.status == 1) {
          this.setState({
            data: data.data,
            data_success: true
          });
        }
      })
      .catch(Error => console.log(Error));
  }

  nhac_rua_tay = () => {
    fetch(url.nhac_rua_tay)
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
      {
        text: "Hà Nội",
        data: this.state.data.hanoi,
        color: "rgb(76,175,80)"
      },
      {
        text: "Việt Nam",
        data: this.state.data.vietnam,
        color: "rgb(30,136,229)"
      },
      {
        text: "Thế giới",
        data: this.state.data.thegioi,
        color: "rgb(244,67,54)"
      }
    ];

    return data.map(item => (
      <div
        className="col-md-4 col-sm-6 portfolio-item"
        onClick={() => this.nhac_rua_tay()}
      >
        <div className="portfolio-item-coro">
          <div className="portfolio-caption-top">
            <h1 style={{ color: item.color }}>{item.text}</h1>
            <h1 className="text-ca-nhiem" style={{ color: item.color }}>
              {item.data}
            </h1>
          </div>
        </div>
      </div>
    ));
  };

  ren_data_bottom = () => {
    let data = this.state.data.top10;

    let style_0 = {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      flex: 1
    };

    let style_1 = {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      marginTop: 10
    };

    return (
      <div
        className="col-md-6 col-sm-6 portfolio-item"
        onClick={() => this.nhac_rua_tay()}
      >
        <div className="portfolio-item-coro">
          <div className="portfolio-caption">
            <h2>Số ca nhiễm nCoV toàn thế giới</h2>
            <div style={style_0}>
              <div style={style_1}>
                <h3 style={{ color: "rgb(76,175,80)" }}>Quốc gia</h3>
                {data.map(item => (
                  <h5 style={{ color: "rgb(76,175,80)" }}>{item.quoc_gia}</h5>
                ))}
              </div>
              <div style={style_1}>
                <h3 style={{ color: "rgb(30,136,229)" }}>Ca nhiễm</h3>
                {data.map(item => (
                  <h5 style={{ color: "rgb(30,136,229)" }}>{item.ca_nhiem}</h5>
                ))}
              </div>
              <div style={style_1}>
                <h3 style={{ color: "red" }}>Tử vong</h3>
                {data.map(item => (
                  <h5 style={{ color: "red" }}>{item.tu_vong}</h5>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  ren_data_bottom_right = () => {
    return (
      <div className="col-md-6 col-sm-6 portfolio-item">
        <div className="portfolio-item-coro">
          <div
            className="portfolio-caption"
            onClick={() => this.props.go_chuc_nang()}
          >
            <h2>Chi tiết về dịch bệnh</h2>
            <SwiftSlider
              data={data_img_text}
              enableNextAndPrev={false}
              height={300}
              enableNextAndPrev={true}
              interval={3000}
              showDots={false}
            />
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
            <div className="row">
              {this.state.data_success ? this.ren_data() : null}
              {this.state.data_success ? this.ren_data_bottom() : null}
              {this.ren_data_bottom_right()}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Manchinh;
