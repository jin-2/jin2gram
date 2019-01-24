// import

// action
const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";

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
    isLoggedIn: false,
    // token: ""
  };
}

// exports
const actionCreators = {
  facebookLogin,
  usernameLogin,
  createAccount,
  logout
};
export { actionCreators };

// reducer export
export default reducer;
