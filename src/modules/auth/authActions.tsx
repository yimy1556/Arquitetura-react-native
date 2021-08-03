import {AuthService} from '_services';

const prefix = 'AUTH';

const authActions = {
  ERROR_MESSAGE_CLEARED: `${prefix}_ERROR_MESSAGE_CLEARED`,

  AUTH_INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  AUTH_INIT_ERROR: `${prefix}_INIT_ERROR`,

  AUTH_START: `${prefix}_START`,
  AUTH_SUCCESS: `${prefix}_SUCCESS`,
  AUTH_ERROR: `${prefix}_ERROR`,

  UPDATE_PROFILE_START: `${prefix}_UPDATE_PROFILE_START`,
  UPDATE_PROFILE_SUCCESS: `${prefix}_UPDATE_PROFILE_SUCCESS`,
  UPDATE_PROFILE_ERROR: `${prefix}_UPDATE_PROFILE_ERROR`,

  CURRENT_USER_REFRESH_START: `${prefix}_CURRENT_USER_REFRESH_START`,
  CURRENT_USER_REFRESH_SUCCESS: `${prefix}_CURRENT_USER_REFRESH_SUCCESS`,
  CURRENT_USER_REFRESH_ERROR: `${prefix}_CURRENT_USER_REFRESH_ERROR`,

  doSigninWithEmailAndPassword:
    (email: string, password: string) => async (dispatch: any) => {
      try {
        dispatch({type: authActions.AUTH_START});
        let currentUser = null;

        const token = await AuthService.signinWithEmailAndPassword(
          email,
          password,
        );

        console.log(token);
        currentUser = await AuthService.fetchMe();

        dispatch({
          type: authActions.AUTH_SUCCESS,
          payload: {
            currentUser,
          },
        });
      } catch (error) {
        dispatch({
          type: authActions.AUTH_ERROR,
        });
      }
    },

  doSignout: () => async (dispatch: any) => {
    try {
      dispatch({type: authActions.AUTH_START});
      await AuthService.signout();

      dispatch({
        type: authActions.AUTH_SUCCESS,
        payload: {
          currentUser: null,
        },
      });
    } catch (error) {
      dispatch({type: authActions.AUTH_ERROR});
    }
  },
};

export default authActions;
