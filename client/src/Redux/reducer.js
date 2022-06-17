import { GET_ALL, CREATE, UPDATE, DELETE, LIKE } from "./actionType";

export const postReducer = (state =[] , action) => {
    switch(action.type){
        case GET_ALL :
            return action.payload;
        case CREATE :
            return [...state, action.payload ];
        default:
            return state;
    }
}