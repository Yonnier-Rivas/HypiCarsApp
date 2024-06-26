import { GET_VEHICLE_SUCCESSFUL, GET_HISTORY_SUCCESSFUL,GET_OFFERS_SUCCESSFUL } from "../../types";

export default (state, action) =>{
    switch(action.type){
        case GET_VEHICLE_SUCCESSFUL:
            return{
                ...state,
                carsCatalog: action.payload
            }

        case GET_HISTORY_SUCCESSFUL:
            return{
               ...state,
                historyCatalog: action.payload
            }
            
        case GET_OFFERS_SUCCESSFUL:
            return{
                ...state,
                offersCatalog: action.payload
            }

        default:
            return state;
    }
}