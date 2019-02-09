// import

// action
const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SET_USER_LIST = "SET_USER_LIST";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_IMAGE_LIST = "SET_IMAGE_LIST";

// action creator
function saveToken(token) {
  localStorage.setItem("jwt", token);
  return {
    type: SAVE_TOKEN,
    token
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

function setUserList(usersList) {
  return {
    type: SET_USER_LIST,
    usersList
  };
}

function setFollowUser(userId) {
  return {
    type: FOLLOW_USER,
    userId
  };
}

function setUnfollowUser(userId) {
  return {
    type: UNFOLLOW_USER,
    userId
  };
}

function setImageList(imageList) {
  return {
    type: SET_IMAGE_LIST,
    imageList
  };
}

// API actions
function facebookLogin(access_token) {
  return dispatch => {
    fetch("/users/login/facebook/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        access_token
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
  };
}

function usernameLogin(username, password) {
  return dispatch => {
    fetch("/rest-auth/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
  };
}

function createAccount(username, password, email) {
  return dispatch => {
    fetch("/rest-auth/registration/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username,
        password1: password,
        password2: password,
        email
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      });
  };
}

function getPhotoLikes(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();

    fetch(`/images/${photoId}/likes/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => response.json())
      .then(json => dispatch(setUserList(json)));
  };
}

function followUser(userId) {
  return (dispatch, getState) => {
    dispatch(setFollowUser(userId));

    const {
      user: { token }
    } = getState();

    fetch(`/users/${userId}/follow/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-type": "application/json"
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(logout());
      } else if (!response.ok) {
        dispatch(setUnfollowUser(userId));
      }
    });
  };
}

function unfollowUser(userId) {
  return (dispatch, getState) => {
    dispatch(setUnfollowUser(userId));

    const {
      user: { token }
    } = getState();

    fetch(`/users/${userId}/unfollow/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-type": "application/json"
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(logout());
      } else if (!response.ok) {
        dispatch(setFollowUser(userId));
      }
    });
  };
}

function getExplore() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();

    fetch("/users/explore/", {
      headers: {
        Authorization: `JWT ${token}`,
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => dispatch(setUserList(json)));
  };
}

function searchByTerm(searchTerm) {
  console.log("searchByTerm fn: ", searchTerm);
  return async (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    const userList = await searchUsers(token, searchTerm);
    const imageList = await searchImages(token, searchTerm);

    if (userList === 401 || imageList === 401) {
      return dispatch(logout());
    }
    dispatch(setUserList(userList));
    dispatch(setImageList(imageList));
  };
}

function searchUsers(token, searchTerm) {
  return fetch(`/users/search/?username=${searchTerm}`, {
    headers: {
      Authorization: `JWT ${token}`,
      "content-type": "application/json"
    }
  })
    .then(response => {
      if (response.status === 401) {
        return 401;
      }
      return response.json();
    })
    .then(json => json);
}

function searchImages(token, searchTerm) {
  return fetch(`/images/search/?hashtags=${searchTerm}`, {
    headers: {
      Authorization: `JWT ${token}`,
      "content-type": "application/json"
    }
  })
    .then(response => {
      if (response.status === 401) {
        return 401;
      }
      return response.json();
    })
    .then(json => json);
}

// initial state
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt")
};

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_TOKEN":
      return applySetToken(state, action);
    case "LOGOUT":
      return applyLogout(state, action);
    case "SET_USER_LIST":
      return applySetUserList(state, action);
    case "FOLLOW_USER":
      return applySetFollowUser(state, action);
    case "UNFOLLOW_USER":
      return applySetUnfollowUser(state, action);
    case "SET_IMAGE_LIST":
      return applySetImageList(state, action);
    default:
      return state;
  }
}

// reducer function
function applySetToken(state, action) {
  const { token } = action;
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

function applyLogout(state, action) {
  localStorage.removeItem("jwt");
  return {
    ...state,
    isLoggedIn: false
    // token: ""
  };
}

function applySetUserList(state, action) {
  const { usersList } = action;
  return {
    ...state,
    usersList
  };
}

function applySetFollowUser(state, action) {
  const { userId } = action;
  const { usersList } = state;
  const updatedUserList = usersList.map(user => {
    if (user.id === userId) {
      return { ...user, following: true };
    }
    return user;
  });
  return {
    ...state,
    usersList: updatedUserList
  };
}

function applySetUnfollowUser(state, action) {
  const { userId } = action;
  const { usersList } = state;
  const updatedUserList = usersList.map(user => {
    if (user.id === userId) {
      return { ...user, following: false };
    }
    return user;
  });
  return {
    ...state,
    usersList: updatedUserList
  };
}

function applySetImageList(state, action) {
  const { imageList } = action;
  return {
    ...state,
    imageList
  };
}

// exports
const actionCreators = {
  facebookLogin,
  usernameLogin,
  createAccount,
  logout,
  getPhotoLikes,
  followUser,
  unfollowUser,
  getExplore,
  searchByTerm
};
export { actionCreators };

// reducer export
export default reducer;
