import { BOTTOM_SWITCH, CONTINUE_SESSION, SESSION_EXPIRED, LOOK_UPS, NOTIFICATION_COUNT, SET_USER_DATA, SIGN_IN, SIGN_OUT, SIGN_UP, NOTIFICATION_READ, JAIL_BREAK, AGENT_VIEW, IS_CHAT_RENDER, HAS_VIDEO_SEEN, FROM_SSO, FROM_ANONYMOUS_LINK } from "../actions";


const initialState = {
	userData: {},
	isLoading: true,
	isLogged: false,
	userToken: null,
};

export default AuthReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_USER_DATA:
			return {
				...state,
				userData: action.payload.user,
			};

		case SIGN_UP:

			return {
				...state,
				isLoading: false,
				isLogged: true,
				userToken: action.payload.token,
				userData: action.payload.user,
			};

		case SIGN_IN:
			return {
				...state,
				isLoading: false,
				isLogged: true,
				userToken: action.payload.token,
				userData: action.payload.user,
			};


		case SIGN_OUT:
			return {
				...state,
				isLoading: false,
				isLogged: false,
				userToken: null,
				userData: {},
			};

		case CONTINUE_SESSION:
			return {
				...state,
				isLoading: false,
				isLogged: true,
				userToken: action.payload,
			};

		default:
			return state;
	}
}