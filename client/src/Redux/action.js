import { GET_ALL, CREATE, UPDATE, DELETE, LIKE } from "./actionType";
import axios from "axios"


export const getPost = () => async(dispatch) => {
    try {
       const {data} = axios.get(`http://localhost:4000/posts`);
       dispatch({type : GET_ALL , payload : data})
    } catch (error) {
       console.log(error.message);
    }
}

export const createPost = (post) => async(dispatch) => {
     const config = { headers: { "Content-Type": "application/json" } };

    try {
        const { data } = axios.post(`http://localhost:4000/posts`, { post }, config, );
            dispatch({ type:CREATE , payload: data });

    } catch (error) {
        
    }
}