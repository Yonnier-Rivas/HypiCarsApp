import React, {useReducer} from "react";
import RequestContext from "./requestContext";
import RequestReducer from "./requestReducer";
import { SELECT_VEHICLE } from "../../types";

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

   return (
        <RequestContext.Provider
          value={{
               request: state.request,
               selectCar: state.selectCar,
               getCar
          }}
          >
               {props.children}
        </RequestContext.Provider>
   );
}

export default RequestState;