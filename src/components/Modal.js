import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import TextField from "@material-ui/core/TextField";

import { handleModal, updateContent } from "../redux/action";
import { connect } from "react-redux";

import UpdateButton from "./UpdateButton";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TransitionsModal(props) {
  const classes = useStyles();
  const { title, content } = props.selected;

  const [tempTitle, setTemptitle] = React.useState(title);
  const [tempContent, setTempContent] = React.useState(content);

  const handleClose = () => {
    props.handleModal(false, {});
  };
  const handleSubmit = async () => {
    console.log("after submit");
    await props.updateContent({
      _id: props.id,
      title: tempTitle,
      content: tempContent,
    });
  };
  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.modalState}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.modalState}>
          <div className={classes.paper} style={{ borderColor: "white" }}>
            <h3>{`Update - ${title}`}</h3>
            <hr />

            <TextField
              type="text"
              id="outlined-basic"
              label="title"
              variant="outlined"
              autoComplete="off"
              style={{ width: 300, marginTop: "40px" }}
              value={tempTitle}
              onChange={(e) => {
                e.preventDefault();
                setTemptitle(e.target.value);
              }}
            />
            <br />
            <TextField
              type="text"
              id="outlined-basic"
              label="content"
              variant="outlined"
              autoComplete="off"
              style={{ width: 300, marginTop: "40px" }}
              value={tempContent}
              onChange={(e) => {
                e.preventDefault();
                setTempContent(e.target.value);
              }}
            />
            <UpdateButton onSubmit={handleSubmit} type="button" />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modalState: state.content.modal,
    selected: state.content.selected,
    id: state.content.selected._id,
  };
};
export default connect(mapStateToProps, {
  handleModal,
  updateContent,
})(TransitionsModal);
