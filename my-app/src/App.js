import React, { Component } from "react";
import ManchiTiet from "./ManChiTiet/ManChiTiet";
import Manchinh from "./ManChinh/ManChinh";
import ManChucnang from "./ManChucnang/ManChucNang";
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
      type: MANCHUCNANG,
    };
  }

  componentDidMount() {}

  stop_thuyet_minh = () => {
    fetch(url.stop_thuyet_minh)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((Error) => console.log(Error));
  };

  render_main = () => {
    if (this.state.type == MANCHITIET) {
      return (
        <ManchiTiet
          click_back={() => {
            this.setState({
              type: MANCHUCNANG,
            });
            this.stop_thuyet_minh();
          }}
          data={this.state.data_chi_tiet}
        />
      );
    }
    if (this.state.type == MANCHINH) {
      return (
        <Manchinh
          go_chuc_nang={() =>
            this.setState({
              type: MANCHUCNANG,
            })
          }
        />
      );
    }
    if (this.state.type == MANCHUCNANG) {
      return (
        <ManChucnang
          click_chi_tiet={(data) =>
            this.setState({
              type: MANCHITIET,
              data_chi_tiet: data,
            })
          }
          click_back={() => this.setState({ type: MANCHINH })}
        />
      );
    }
  };

  render() {
    return <div>{this.render_main()}</div>;
  }
}

export default App;
