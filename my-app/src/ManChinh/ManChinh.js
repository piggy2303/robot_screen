import React, { Component } from "react";
// import logo from "./logo.svg";
import "./ManChinh.css";

function Manchinh() {
  return (
    <div className="rootmanchinh">
      <div className="overlay"></div>
      <img
        className="anh-thu-tuong"
        src={require("../img/thutuong.jpg")}
        height="420"
        width="420"
      />

      <div className="masthead">
        <div className="masthead-bg"></div>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-10 my-auto">
              <div className="masthead-content text-white py-5 py-md-0">
                <h3 className="mb-4">
                  Thủ tướng chỉ thị đẩy lùi "tín dụng đen"
                </h3>
                <p className="mb-5">
                  Nổi lên là tình trạng các đối tượng lợi dụng mạng viễn thông,
                  Internet, núp bóng các doanh nghiệp có chức năng cho vay tài
                  chính, dịchđến 300%, thậm chí lên đến 700%/năm đối với khoản
                  tiền ở thời điểm vay, nhằm thu lợi bất chính.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-group">
        <div className="btn-child">
          <i className="fas fa-volume-up fa-2x"></i>
          <p> Thuyết minh</p>
        </div>
        <div className="btn-child">
          <i className="fas fa-directions fa-3x"></i>
          <p> Chỉ đường</p>
        </div>
      </div>
    </div>
  );
}

export default Manchinh;
