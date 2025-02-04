
export const SET_USER_DATA = 'auth/SET_USER_DATA';
export const SIGN_UP = 'auth/SIGN_UP';
export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';
export const CONTINUE_SESSION = 'auth/CONTINUE_SESSION';
export const BOTTOM_SWITCH = 'BOTTOM_SWITCH';
export const LOOK_UPS = 'LOOK_UPS';

export const CHECKOUT_USER_DATA = 'CHECKOUT_USER_DATA';
export const IS_CARD_INFO = 'IS_CARD_INFO';
export const IS_APPLE_PAY = 'IS_APPLE_PAY';
export const IS_APPLE_PAY_CANCELLED = 'IS_APPLE_PAY_CANCELLED';

export const USER_ROLE = 'USER_ROLE';
export const PROPERTY_INFO = 'PROPERTY_INFO';
export const FORM1 = 'FORM1';
export const FORM2 = 'FORM2';
export const FORM3 = 'FORM3';
export const AREAS = 'AREAS';
export const ITEM_DATA = 'ITEM_DATA';
export const USER_PARTICIPATION = 'USER_PARTICIPATION';
export const PROPERTY_AREA_DATA = 'PROPERTY_AREA_DATA';
export const IS_WALLET_WITHDRAW_TOKEN = 'IS_WALLET_WITHDRAW_TOKEN';
export const IS_PREFERRED_METHOD = 'IS_PREFERRED_METHOD';
export const LISTING_INFO = 'LISTING_INFO';

export const NOTIFICATION_COUNT = 'NOTIFICATION_COUNT';
export const NOTIFICATION_READ = 'NOTIFICATION_READ';

export const FRIEND_INVITES = 'FRIEND_INVITES';

export const SESSION_EXPIRED = 'SESSION_EXPIRED';
export const AGENT_VIEW = 'AGENT_VIEW';
export const IS_CHAT_RENDER = 'IS_CHAT_RENDER';
export const JAIL_BREAK = 'JAIL_BREAK';
export const HAS_VIDEO_SEEN = 'HAS_VIDEO_SEEN';
export const FROM_SSO = 'FROM_SSO';
export const FROM_ANONYMOUS_LINK = 'FROM_ANONYMOUS_LINK';


// Authentication
export const setUserData = (payload) => ({ type: SET_USER_DATA, payload });
export const signUp = (payload) => ({ type: SIGN_UP, payload });
export const signIn = (payload) => ({ type: SIGN_IN, payload });
export const signOut = () => ({ type: SIGN_OUT });
export const continueSession = (payload) => ({ type: CONTINUE_SESSION, payload });
export const bottomTabSwitch = (payload) => ({ type: BOTTOM_SWITCH, payload });
export const setLookUps = (payload) => ({ type: LOOK_UPS, payload });

//Checkout
export const checkoutData = (payload) => ({ type: CHECKOUT_USER_DATA, payload });
export const setCardInfoToken = (payload) => ({ type: IS_CARD_INFO, payload });
export const setApplePay = (payload) => ({ type: IS_APPLE_PAY, payload });
export const setApplePayCancelled = (payload) => ({ type: IS_APPLE_PAY_CANCELLED, payload });
export const setWalletWithdrawToken = (payload) => ({ type: IS_WALLET_WITHDRAW_TOKEN, payload });
export const setPayoutSelectedMethodCheck = (payload) => ({ type: IS_PREFERRED_METHOD, payload });

//FormData
export const setUserRole = (payload) => ({ type: USER_ROLE, payload });
export const setPropertyInfo = (payload) => ({ type: PROPERTY_INFO, payload });
export const setAreas = (payload) => ({ type: AREAS, payload });
export const setForm1 = (payload) => ({ type: FORM1, payload });
export const setForm2 = (payload) => ({ type: FORM2, payload });
export const setForm3 = (payload) => ({ type: FORM3, payload });
export const setItemData = (payload) => ({ type: ITEM_DATA, payload });
export const setFriendInvites = (payload) => ({ type: FRIEND_INVITES, payload });
export const setUserParticipation = (payload) => ({ type: USER_PARTICIPATION, payload });
export const setPropertyAreaData = (payload) => ({ type: PROPERTY_AREA_DATA, payload });
export const setNotificationCount = (payload) => ({ type: NOTIFICATION_COUNT, payload });
export const sessionExpired = (payload) => ({ type: SESSION_EXPIRED, payload });
export const agentView = (payload) => ({ type: AGENT_VIEW, payload });
export const chatRender = (payload) => ({ type: IS_CHAT_RENDER, payload });
export const setJailBreak = (payload) => ({ type: JAIL_BREAK, payload });
export const setVideoSeen = (payload) => ({ type: HAS_VIDEO_SEEN, payload });
export const setFromSSO = (payload) => ({ type: FROM_SSO, payload });
export const setListingData = (payload) => ({ type: LISTING_INFO, payload });
export const setAnonymousLink = (payload) => ({ type: FROM_ANONYMOUS_LINK, payload });






