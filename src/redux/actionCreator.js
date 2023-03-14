import { READY_USER } from "./constants";

export const getReadyUser=(readyUser)=>({type: READY_USER, payload: readyUser});