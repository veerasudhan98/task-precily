import React from "react";
import Button from "@material-ui/core/Button";
import { handleModal } from "../redux/action";
import { connect } from "react-redux";

class UpdateButton extends React.Component {
  updateContent = () => {
    this.props.onSubmit();
    this.props.handleModal(false);
  };
  render() {
    return (
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.updateContent}
        >
          Update
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.content.modal,
  };
};

export default connect(mapStateToProps, {
  handleModal,
})(UpdateButton);
