/* eslint-disable */
import { READY_USER, CANCEL_READY_USER } from "./constants";

export const getReadyUser=(readyUser)=>({type: READY_USER, payload: readyUser});
export const cancelReadyUser=()=>({type: CANCEL_READY_USER, payload: null});
