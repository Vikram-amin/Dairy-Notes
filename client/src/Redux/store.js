import { legacy_createStore as createStore} from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { postReducer } from "./reducer";



const store = createStore(
  postReducer,
  composeWithDevTools(applyMiddleware[thunk])
);

export { store }