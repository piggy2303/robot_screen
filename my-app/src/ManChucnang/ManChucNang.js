import React, { Component } from "react";
// import logo from "./logo.svg";
import "./ManChucNang.css";
import { data_man_chinh } from "../data/data";
import url from "../url";

class ManchiTiet extends Component {
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
    return data_man_chinh.map(item => (
      <div
        className="col-md-4 col-sm-6 portfolio-item"
        onClick={() => {
          this.thuyet_minh(item.id);
          this.props.click_chi_tiet(item);
        }}
      >
        <a className="portfolio-link" data-toggle="modal">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="imgfluid1" src={item.thumbnail} alt="" />
        </a>
        <div className="portfolio-caption">
          <h4>{item.title_vi}</h4>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div id="page-top">
        <section className="bg-light page-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 portfolio-item"></div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <div
                  style={{
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: 10,
                    borderRadius: 15,
                    backgroundColor: "rgb(21,101,192)"
                  }}
                  onClick={() => this.props.click_back()}
                >
                  <h1 style={{ color: "white" }}>Thoát</h1>
                </div>
              </div>
            </div>
            <div className="row">{this.ren_data()}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default ManchiTiet;
