import { GET_JOBS } from "../action";

const inistialState = {
    results: []
}

const jobReducer = (state = inistialState, action) => {
    switch (action.type){
        case GET_JOBS:
            return {
                ...state,
                results: action.payload,
            }
        default:
            return state
    }
}
export default jobReducer