import React, { Component } from "react";
import ManchiTiet from "./ManChiTiet/ManChiTiet";
import Manchinh from "./ManChinh/ManChinh";

// const go_chi_tiet = id;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_chi_tiet: false,
      data_chi_tiet: null
    };
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

  render() {
    return (
      <div>
        {/* <Manchinh /> */}
        {this.state.is_chi_tiet ? (
          <ManchiTiet
            click_back={() => this.click_back_to_man_chinh()}
            data={this.state.data_chi_tiet}
          />
        ) : (
          <Manchinh click_chi_tiet={data => this.click_chi_tiet(data)} />
        )}
        {/* <ManchiTiet></ManchiTiet> */}
      </div>
    );
  }
}

export default App;
