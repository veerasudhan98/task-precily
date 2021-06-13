import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import bgImg from "../static/372977.jpeg";
import Add from "./Add";
import { connect } from "react-redux";
// import Update from "./Update";
// import { PostContext } from "../context/postContext";

const ReactGridLayout = WidthProvider(RGL);

class Layout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 3,
    rowHeight: 50,
    onLayoutChange: function () {},
    cols: 12,
  };
  constructor(props) {
    super(props);
    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    //rendering each components from the list
    // console.log("items here", this.props.items);
    return this.props.items.map(({ title, content, _id }, i) => (
      <div
        key={i}
        className="grid-item"
        style={{ minHeight: "300px", minWidth: "100px", maxHeight: "1000px" }}
      >
        <div className="align-component">{title}</div>
        <div className="align-component">
          <img
            width="50%"
            src={bgImg}
            alt="sample"
            style={{ maxWidth: "300px" }}
          />
        </div>
        <div className="align-component">{content}</div>
        <div className="align-component">
          <Add selected={{ title, content, _id }} />
        </div>
      </div>
    ));
  }

  generateLayout() {
    const p = this.props.items;
    //arrow handlers for resizing
    const availableHandles = ["s", "w", "e", "n"];

    return _.map(new Array(p), function (item, i) {
      console.log("item and i", p, i);
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 4, //prev 2
        h: y,
        i: i.toString(),
        resizeHandles: _.shuffle(availableHandles),
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    if (this.props.loader) return "Loading...";
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.content.list,
    loader: state.content.loading,
  };
};
export default connect(mapStateToProps)(Layout);
