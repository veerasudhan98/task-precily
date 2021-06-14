import {
  FETCH_CONTENT,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_FAILED,
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_CONTENT,
  UPDATE_CONTENT_SUCCESS,
  UPDATE_CONTENT_FAILED,
} from "../action/type";

const initialState = {
  list: [],
  modal: false,
  loading: false,
  selected: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTENT: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_CONTENT_SUCCESS: {
      return {
        ...state,
        list: [...action.payload],
        loading: false,
      };
    }
    case FETCH_CONTENT_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case OPEN_MODAL: {
      console.log(action.payload);
      return {
        ...state,
        modal: true,
        selected: action.payload,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        modal: false,
        selected: {},
      };
    }
    case UPDATE_CONTENT: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_CONTENT_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        list: state.list.map((item) => {
          if (item._id === action.payload.id) {
            return action.payload.data;
          }
          return item;
        }),
        loading: false,
      };
    }
    case UPDATE_CONTENT_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
