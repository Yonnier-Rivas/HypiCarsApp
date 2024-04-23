import React, {useReducer} from "react";
import RequestContext from "./requestContext";
import RequestReducer from "./requestReducer";
import CarsCatalog from "../../Screens/CarsCatalog";

const RequestState = props => {
    //Crear el estado inicial
   const inicialState ={
        request: []
   }

   //definir el useReducer
   const [state, dispatch] = useReducer(RequestReducer,inicialState);
   return (
        <RequestContext.Provider value={{carsCatalog: state.carsCatalog}}>
            {props.children}
        </RequestContext.Provider>
   );
}

export default RequestState;