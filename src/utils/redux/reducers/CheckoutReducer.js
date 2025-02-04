
import { CHECKOUT_USER_DATA, IS_APPLE_PAY, IS_APPLE_PAY_CANCELLED, IS_CARD_INFO, IS_PREFERRED_METHOD, IS_WALLET_WITHDRAW_TOKEN } from "../actions";


const initialState = {
    checkoutUserData: {},
    isCardInfo: false,
    token: null,
    isApplePay: false,
    isAppleCancel: false,
    isWalletWithdrawToken: null,
    isPreferredMethod: false
};

export default CheckoutReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHECKOUT_USER_DATA:
            return {
                ...state,
                checkoutUserData: action.payload,
            };
        case IS_CARD_INFO:
            return {
                ...state,
                token: action.payload,
            };
        case IS_APPLE_PAY:
            return {
                ...state,
                isApplePay: action.payload,
            };
        case IS_APPLE_PAY_CANCELLED:
            return {
                ...state,
                isAppleCancel: action.payload,
            };
        case IS_WALLET_WITHDRAW_TOKEN:
            return {
                ...state,
                isWalletWithdrawToken: action.payload,
            };
        case IS_PREFERRED_METHOD:
            return {
                ...state,
                isPreferredMethod: action.payload,
            };

        default:
            return state;
    }
}