import React, { Component } from "react";
import { Row, Col, Button, Input } from "antd";
import DisplayObjectComponent from "./DisplayObjectComponent";

const { TextArea } = Input;

export default class DisplayJSON extends Component {
  state = {
    jsonText: "",
    data: null
  };

  onChange = ({ target: { value: jsonText } }) => {
    this.setState({ jsonText });
  };

  onClickButton = () => {
    let { jsonText } = this.state;
    let data;
    try {
      jsonText = jsonText === "" ? "{}" : jsonText;
      data = JSON.parse(jsonText);
    } catch (e) {
      alert("输入的不是JSON 哦");
      return;
    }

    this.setState({ data });
  };

  render() {
    const { jsonText, data } = this.state;

    return (
      <div>
        <Row type="flex" justify="space-around">
          <Col span={11}>
            <TextArea
              value={jsonText}
              onChange={this.onChange}
              placeholder="input hear"
              rows={20}
            />
          </Col>
          <Col span={2}>
            <Button type="primary" icon="swap" onClick={this.onClickButton} />
          </Col>
          <Col span={11} height="100%">
            <DisplayObjectComponent data={data} />
          </Col>
        </Row>
      </div>
    );
  }
}
