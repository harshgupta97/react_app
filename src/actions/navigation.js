import { SET_NAVIGATION, SET_NAVIGATIONS } from './types';

export const onNavigate = data => {
    return {
        type: SET_NAVIGATION,
        payload: data
    }
}

export const setNavigations = data => {
    return [{
        type: SET_NAVIGATIONS,
        payload: data
    }];
};