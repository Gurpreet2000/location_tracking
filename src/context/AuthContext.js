import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup =
  dispatch =>
  ({email, password}) => {
    // make api req to signup with email and password
  };

const signin =
  dispatch =>
  ({email, password}) => {};

const signout = dispatch => () => {};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {isSignedIn: false},
);
