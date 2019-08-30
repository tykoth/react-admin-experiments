import { CHANGE_THEME } from './configuration/actions';

export default (previousState = 'light', { type, payload }) => {
    if (type === CHANGE_THEME) {
        localStorage.setItem('theme', payload);
        return payload;
    }


    return localStorage.getItem('theme') || previousState;
    // return previousState;
};
