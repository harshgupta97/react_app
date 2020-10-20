import {
    SET_NAVIGATION,
    GET_NAVIGATIONS,
    NAVIGATION_BACK,
} from '../actions/types';

const initialState = {
    current: {
        title: 'Home',
        route: ''
    },
    history: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_NAVIGATION:
            return {
                ...state,
                current: action.payload,
            };
        case GET_NAVIGATIONS:
            return {
                ...state,
                history: action.payload,
            };
        case NAVIGATION_BACK:
            return {
                ...state,
                history: action.payload,
            };
        default:
            return state;
    }
}