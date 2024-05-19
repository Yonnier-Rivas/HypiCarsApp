import React, {useReducer} from "react";
import RequestContext from "./requestContext";
import RequestReducer from "./requestReducer";
import { SELECT_VEHICLE, SAVE_CAR, SHOW_CARSHOP, DELETE_VEHICLE_SHOP, CLEAR_SHOP } from "../../types";

const RequestState = props => {
    //Crear el estado inicial
   const inicialState ={
        request: [],
        selectCar: null
   }

   //definir el useReducer
   const [state, dispatch] = useReducer(RequestReducer,inicialState);

   //SELECCIONAR Y OBTENER EL VEHICULO
   const getCar = selectCar => {
     dispatch({
          type: SELECT_VEHICLE,
          payload: selectCar
     })
   }

   //GUARDAR VEHICULO
   const saveCar = request => {
     dispatch({
          type: SAVE_CAR,
          payload: request
     })
   }

   //MOSTRAR CARRITO DE COMPRAS
   const showCarShop = total => {
     dispatch({
          type: SHOW_CARSHOP,
          payload: total
     })
   }

   //ELIMINAR VEHICULO DEL CARRITO DE COMPRAS
   const deleteVehicleShop = id => {
     dispatch({
          type: DELETE_VEHICLE_SHOP,
          payload: id
     })
   }

   //LIMPIAR EL CARRITO DE COMPRAS
   const clearShop = () => {
     dispatch({ 
          type: CLEAR_SHOP 
     });
   };

   return (
        <RequestContext.Provider
          value={{
               request: state.request,
               selectCar: state.selectCar,
               getCar,
               saveCar,
               showCarShop,
               deleteVehicleShop,
               clearShop
          }}
          >
               {props.children}
        </RequestContext.Provider>
   );
}

export default RequestState;