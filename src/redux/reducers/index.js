import { productReducer,selectedProductReducer } from "./productReducers";
import { combineReducers } from "redux";


const reducers=combineReducers({
    allProducts: productReducer,
    product:selectedProductReducer
})

export default reducers;