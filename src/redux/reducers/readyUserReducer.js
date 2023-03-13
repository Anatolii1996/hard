import { READY_USER } from "../constants";

const initialState = {};
const readyUsersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case READY_USER:
            return { ...state, ...payload };


        default:
            return state;

    }
};
export default readyUsersReducer;