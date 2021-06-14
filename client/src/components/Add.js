import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "./Modal";
import { handleModal } from "../redux/action";
import { connect } from "react-redux";

class Add extends React.Component {
  render({ selected } = this.props) {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.props.handleModal(true, selected);
          }}
        >
          Add
        </Button>
        {this.props.modal ? <Modal /> : ""}
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
})(Add);
