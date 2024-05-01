import { SELECT_VEHICLE } from "../../types";

export default (state, action) =>{
    switch(action.type){
        case SELECT_VEHICLE:
            return{
                ...state,
                selectCar: action.payload
            }

        default:
            return state;
    }
}