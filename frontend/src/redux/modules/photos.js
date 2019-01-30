// import
import { actionCreators as userActions } from "./user";

// action
const SET_FEED = "SET_FEED";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";

// action creator
function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

function doLikePhoto(photoId) {
  return {
    type: LIKE_PHOTO,
    photoId
  };
}

function doUnlikePhoto(photoId) {
  return {
    type: UNLIKE_PHOTO,
    photoId
  };
}

// API actions
function getFeed() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();

    fetch("/images/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => dispatch(setFeed(json)))
      .catch(err => console.log(err));
  };
}

// initial state
const initialState = {};

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FEED":
      return applySetFeed(state, action);
    case "LIKE_PHOTO":
      return applyLikePhoto(state, action);
    case "UNLIKE_PHOTO":
      return applyUnlikePhoto(state, action);
    default:
      return state;
  }
}

// reducer function
function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

function applyLikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo, is_liked: true, likes_count: photo.likes_count + 1 };
    }
    return photo;
  });
  return { ...state, feed: updatedFeed };
}

function applyUnlikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo, is_liked: false, likes_count: photo.likes_count - 1 };
    }
    return photo;
  });
  return { ...state, feed: updatedFeed };
}

// exports
const actionCreators = {
  getFeed,
  setFeed,
  doLikePhoto,
  doUnlikePhoto
};
export { actionCreators };

// recuder export
export default reducer;
