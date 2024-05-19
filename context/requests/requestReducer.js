import { SELECT_VEHICLE, SAVE_CAR, SHOW_CARSHOP, DELETE_VEHICLE_SHOP, CLEAR_SHOP } from "../../types";

export default (state, action) =>{
    switch(action.type){
        case SELECT_VEHICLE:
            return{
                ...state,
                selectCar: action.payload
            }

        case SAVE_CAR:
            return{
                ...state,
                request: [...state.request, action.payload]
            }

        case SHOW_CARSHOP:
            return{
                ...state,
                total: action.payload
            }

        case DELETE_VEHICLE_SHOP:
            return{
                ...state,
                request: state.request.filter(vehicle => vehicle.id !== action.payload)
            }
        
        case CLEAR_SHOP:
            return{
               ...state,
                total: 0,
                request: []
            }

        default:
            return state;
    }
}