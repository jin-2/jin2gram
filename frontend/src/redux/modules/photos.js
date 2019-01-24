// import

// action

// action creator

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
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  };
}

// initial state
const initialState = {
  feed: []
};

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// reducer function

// exports
const actionCreators = {
  getFeed
};
export { actionCreators };

// recuder export
export default reducer;
