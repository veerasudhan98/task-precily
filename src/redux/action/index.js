import axios from "axios";
import { toastr } from "react-redux-toastr";

import {
  FETCH_CONTENT,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_FAILED,
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_CONTENT,
  UPDATE_CONTENT_SUCCESS,
  UPDATE_CONTENT_FAILED,
} from "./type";

export const fetchContent = () => async (dispatch) => {
  dispatch({ type: FETCH_CONTENT });
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:5000/posts/",
    });
    dispatch({ type: FETCH_CONTENT_SUCCESS, payload: response.data });
  } catch (e) {
    console.log(e);
    toastr.error(e.response.data.error);
    dispatch({ type: FETCH_CONTENT_FAILED });
  }
};

export const updateContent = (updatedContent) => async (dispatch) => {
  dispatch({ type: UPDATE_CONTENT });
  try {
    const response = await axios({
      method: "patch",
      url: `http://localhost:5000/posts/${updatedContent._id}`,
      data: updatedContent,
    });
    console.log(response.data);
    dispatch({
      type: UPDATE_CONTENT_SUCCESS,
      payload: {
        id: updatedContent._id,
        data: response.data,
      },
    });
  } catch (e) {
    console.log(e);
    toastr.error("Error", e.response.data.message);
    dispatch({ type: UPDATE_CONTENT_FAILED });
  }
};

export const handleModal = (open, selected) => async (dispatch) => {
  console.log(selected);
  if (open) dispatch({ type: OPEN_MODAL, payload: selected });
  else dispatch({ type: CLOSE_MODAL });
};
