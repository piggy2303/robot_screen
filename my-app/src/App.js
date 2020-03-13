import React, { Component } from "react";
import ManchiTiet from "./ManChiTiet/ManChiTiet";
import Manchinh from "./ManChinh/ManChinh";
import ManChucnang from "./ManChucnang";
import url from "./url";
import { data_man_chinh } from "./data/data";

// const go_chi_tiet = id;

const MANCHITIET = "MANCHITIET";
const MANCHINH = "MANCHINH";
const MANCHUCNANG = "MANCHUCNANG";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_chi_tiet: false,
      data_chi_tiet: null,
      is_blank: false,
      type: MANCHINH
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.loadData(), 3000);
  }

  async loadData() {
    fetch(url.blank)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (data.status == 1) {
          this.setState({
            is_blank: true
          });
        }
        if (data.status == 0) {
          this.setState({
            is_blank: false
          });
        }
      })
      .catch(Error => console.log(Error));
  }

  click_chi_tiet = data => {
    this.setState({
      data_chi_tiet: data,
      is_chi_tiet: true
    });
  };

  stop_thuyet_minh = () => {
    fetch(url.stop_thuyet_minh)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(Error => console.log(Error));
  };

  click_back_to_man_chinh = () => {
    this.stop_thuyet_minh();
    this.setState({
      is_chi_tiet: false
    });
  };

  render_main = () => {
    if (this.state.type == MANCHITIET) {
      return (
        <ManchiTiet
          click_back={() => this.click_back_to_man_chinh()}
          data={data_man_chinh[0]}
        />
      );
    }
    if (this.state.type == MANCHINH) {
      return <Manchinh go_chuc_nang={} />;
    }
    if (this.state.type == MANCHUCNANG) {
      return <ManChucnang click_back={() => this.click_back_to_man_chinh()} />;
    }
  };

  render() {
    return <div>{this.render_main()}</div>;
  }
}

export default App;
