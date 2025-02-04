
import { USER_ROLE, PROPERTY_INFO, FORM1, FORM2,FORM3, AREAS, ITEM_DATA, USER_PARTICIPATION, PROPERTY_AREA_DATA, FRIEND_INVITES, LISTING_INFO } from "../actions";


const initialState = {
    userRole: {},
    propertyInfo: null,
    areas: [],
    form1: null,
    form2: null,
    form3: null,
    itemData: null,
    participationRole: '',
    areaData: null,
    friendInviteData: null,
    listing:{}
};

export default FormReducer = (state = initialState, action) => {

    switch (action.type) {

        case LISTING_INFO:
            return {
                ...state,
                listing: action.payload,
            };
        case USER_ROLE:
            return {
                ...state,
                userRole: action.payload,
            };
        case PROPERTY_INFO:
            return {
                ...state,
                propertyInfo: action.payload,
            };
        case AREAS:
            return {
                ...state,
                areas: action.payload,
            };
        case FORM1:
            return {
                ...state,
                form1: action.payload,
            };
        case FORM2:
            return {
                ...state,
                form2: action.payload,
            };
        case FORM3:
            return {
                ...state,
                form3: action.payload,
            };
        case ITEM_DATA:
            return {
                ...state,
                itemData: action.payload,
            };
        case USER_PARTICIPATION:
            return {
                ...state,
                participationRole: action.payload,
            };
        case PROPERTY_AREA_DATA:
            return {
                ...state,
                areaData: action.payload,
            };
        case FRIEND_INVITES:
            return {
                ...state,
                friendInviteData: action.payload,
            };

        default:
            return state;
    }
}