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
      is_blank: true,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.loadData(), 3000);
  }

  stop_talking = () => {
    fetch(url.stop_talking)
      .then((response) => {
        console.log(response);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((Error) => console.log(Error));
  };

  async loadData() {
    fetch(url.blank)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status == 1) {
          this.setState({
            is_blank: true,
          });
        }
        if (data.status == 0) {
          this.setState({
            is_blank: false,
          });
        }
      })
      .catch((Error) => console.log(Error));
  }

  click_chi_tiet = (data) => {
    this.setState({
      data_chi_tiet: data,
      is_chi_tiet: true,
    });
  };

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

  click_back_to_man_chinh = () => {
    this.stop_thuyet_minh();
    this.setState({
      is_chi_tiet: false,
    });
  };

  render_main = () => {
    if (this.state.is_chi_tiet) {
      return (
        <ManchiTiet
          click_back={() => this.click_back_to_man_chinh()}
          data={this.state.data_chi_tiet}
          stop_talking={() => this.stop_talking()}
        />
      );
    } else {
      return (
        <Manchinh
          stop_talking={() => this.stop_talking()}
          click_chi_tiet={(data) => this.click_chi_tiet(data)}
        />
      );
    }
  };

  render_blank = () => {
    if (this.state.is_blank) {
      return (
        <div
          style={{
            backgroundColor: "black",
            height: 800,
            width: 1280,
          }}
        ></div>
      );
    } else {
      return this.render_main();
    }
  };

  wake_up = () => {
    fetch(url.wake_up)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((Error) => console.log(Error));
  };

  render() {
    return (
      <div
        onClick={() => {
          this.setState({
            is_blank: false,
          });
          this.wake_up();
        }}
      >
        {this.render_blank()}
      </div>
    );
  }
}

export default App;
