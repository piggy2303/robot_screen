import React, { Component } from "react";
import ManchiTiet from "./ManChiTiet/ManChiTiet";
import Manchinh from "./ManChinh/ManChinh";
import url from "./url";

// const go_chi_tiet = id;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_chi_tiet: false,
      data_chi_tiet: null,
      is_blank: true
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.loadData(), 6000);
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
      })
      .catch(Error => console.log(Error));
  }

  click_chi_tiet = data => {
    this.setState({
      data_chi_tiet: data,
      is_chi_tiet: true
    });
  };

  click_back_to_man_chinh = () => {
    this.setState({
      is_chi_tiet: false
    });
  };

  render_main = () => {
    if (this.state.is_chi_tiet) {
      return (
        <ManchiTiet
          click_back={() => this.click_back_to_man_chinh()}
          data={this.state.data_chi_tiet}
        />
      );
    } else {
      return <Manchinh click_chi_tiet={data => this.click_chi_tiet(data)} />;
    }
  };

  render_blank = () => {
    if (this.state.is_blank) {
      return (
        <div
          style={{
            backgroundColor: "black",
            height: 800,
            width: 1280
          }}
        ></div>
      );
    } else {
      return this.render_main();
    }
  };

  render() {
    return (
      <div
        onClick={() =>
          this.setState({
            is_blank: false
          })
        }
      >
        {this.render_blank()}
      </div>
    );
  }
}

export default App;
