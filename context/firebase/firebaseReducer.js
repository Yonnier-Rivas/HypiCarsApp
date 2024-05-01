import { GET_VEHICLE_SUCCESSFUL } from "../../types";

export default (state, action) =>{
    switch(action.type){
        case GET_VEHICLE_SUCCESSFUL:
            return{
                ...state,
                carsCatalog: action.payload
            }

        default:
            return state;
    }
}