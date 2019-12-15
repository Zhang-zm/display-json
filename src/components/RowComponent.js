import React, { Component } from "react";
import { Button } from "antd";

export default class RowCompoennt extends Component {
  state = {
    isFold: true,
    data: null
  };

  componentDidMount() {
    const { isFold, data } = this.props;

    if (Object.prototype.toString.call(isFold) === "[object Boolean]") {
      this.setState({ isFold });
    }

    this.setState({ data });
  }
  UNSAFE_componentWillReceiveProps({ isFold, data }) {
    if (Object.prototype.toString.call(isFold) === "[object Boolean]") {
      this.setState({ isFold });
    }

    this.setState({ isFold, data });
  }

  toggleFold() {
    this.setState({ isFold: !this.state.isFold });
  }

  renderContent(data, isFold, lev = 0) {
    const type = Object.prototype.toString.call(data).slice(8, -1);
    const getIndentHtml = count => {
      let ret = "";

      for (let i = 0; i <= count; i++) {
        ret += "&nbsp;";
      }
      return ret;
    };

    const _render = type => {
      if (type === "Object") {
        const keys = Object.keys(data);

        return keys.map((key, index) => {
          return (
            <>
              <div key={`${lev}-${index}`}>
                {key}:&nbsp;
                <RowCompoennt
                  inline={true}
                  isFold={true}
                  data={data[key]}
                  lev={lev + 1}
                  isLast={index === keys.length - 1}
                />
              </div>
            </>
          );
        });
      } else {
        return data.map((item, index) => (
          <div key={`${lev}-${index}`}>
            <RowCompoennt
              inline={true}
              isFold={true}
              data={item}
              lev={lev + 1}
              isLast={index === data.length - 1}
            />
          </div>
        ));
      }
    };

    return (
      <>
        <div style={{ display: "flex" }}>
          {isFold ? (
            ""
          ) : (
            <div dangerouslySetInnerHTML={{ __html: getIndentHtml(lev + 1) }} />
          )}
          {isFold ? "" : <div>{_render(type)}</div>}
        </div>
      </>
    );
  }

  render() {
    const { isFold, data } = this.state;
    const type = Object.prototype.toString.call(data).slice(8, -1);
    const { lev, isLast = true } = this.props;

    return (
      <div style={{ display: "inline" }}>
        {type === "Object" || type === "Array" ? (
          <>
            {type === "Object" ? "{" : "["}
            <Button
              size="small"
              icon={isFold ? "plus" : "minus"}
              onClick={this.toggleFold.bind(this)}
            />
          </>
        ) : (
          ""
        )}
        {type !== "Object" && type !== "Array"
          ? JSON.stringify(data)
          : this.renderContent(data, isFold, lev)}
        {type === "Object" ? "}" : ""}
        {type === "Array" ? "]" : ""}
        {isLast ? "" : ","}
      </div>
    );
  }
}
