import React, { Component } from "react";
import RowCompoennt from "./RowComponent";

export default class DisplayObjectComponent extends Component {
  state = {
    data: null
  };

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({ data: props.data });
  }

  render() {
    const { data } = this.state;
    const boxStyle = {
      textAlign: "left"
    };

    return (
      <div style={boxStyle}>
        {data === null ? "无" : <RowCompoennt isFold={true} data={data} />}
      </div>
    );
  }
}
