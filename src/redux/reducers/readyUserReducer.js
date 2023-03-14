import { READY_USER, CANCEL_READY_USER } from "../constants";

const initialState = {};
const readyUsersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case READY_USER:
            return { ...state, ...payload };

        case CANCEL_READY_USER:
            return initialState;
        default:
            return state;

    }
};
export default readyUsersReducer;