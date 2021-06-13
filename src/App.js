import React from "react";
import "./index.css";
import Layout from "./components/Layout";
import { connect } from "react-redux";

import { fetchContent } from "./redux/action";

class App extends React.Component {
  componentDidMount = async () => {
    await this.props.fetchContent();
  };

  render() {
    return <Layout />;
  }
}

export default connect(null, {
  fetchContent,
})(App);
