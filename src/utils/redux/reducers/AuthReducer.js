import { BOTTOM_SWITCH, CONTINUE_SESSION, SESSION_EXPIRED, LOOK_UPS, NOTIFICATION_COUNT, SET_USER_DATA, SIGN_IN, SIGN_OUT, SIGN_UP, NOTIFICATION_READ, JAIL_BREAK, AGENT_VIEW, IS_CHAT_RENDER, HAS_VIDEO_SEEN, FROM_SSO, FROM_ANONYMOUS_LINK } from "../actions";


const initialState = {
	userData: {},
	isLoading: true,
	isLogged: false,
	userToken: null,
	isBottom: false,
	lookUpsData: null,
	notificationCount: 0,
	isNotifyRead: false,
	isSessionExpire: false,
	isAgentView: false,
	isJailBreak: false,
	isChatRender: false,
	hasVideoSeen: false,
	fromSSO:false,
	fromAnonymousObject:{}
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
		case BOTTOM_SWITCH:
			return {
				...state,
				isBottom: action.payload,
			};
		case LOOK_UPS:
			return {
				...state,
				lookUpsData: action.payload,
			};
		case NOTIFICATION_COUNT:
			return {
				...state,
				notificationCount: action.payload,
			};
		case NOTIFICATION_READ:
			return {
				...state,
				isNotifyRead: action.payload,
			};
		case SESSION_EXPIRED:
			return {
				...state,
				isSessionExpire: action.payload,
			};
		case AGENT_VIEW:
			return {
				...state,
				isAgentView: action.payload,
			};
		case IS_CHAT_RENDER:
			return {
				...state,
				isChatRender: action.payload,
			};
		case JAIL_BREAK:
			return {
				...state,
				isJailBreak: action.payload,
			};
		case HAS_VIDEO_SEEN:
			return {
				...state,
				hasVideoSeen: action.payload,
			};
		case FROM_SSO:
			return {
				...state,
				fromSSO: action.payload,
			};
		case FROM_ANONYMOUS_LINK:
			return {
				...state,
				fromAnonymousLink: action.payload,
			};

		default:
			return state;
	}
}