import React, {useReducer} from "react";
import firebase from "../../firebaseDB";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";
import { GET_VEHICLE_SUCCESSFUL } from '../../types'
import _ from 'lodash'


const FirebaseState = props => {
    //Crear el estado inicial
     const inicialState ={
        carsCatalog: []
   }

   
   //definir el useReducer
   const [state, dispatch] = useReducer(FirebaseReducer,inicialState);

   //CONSULTAR VEHICULOS
   const getVehicles = () => {
     firebase.db
          .collection('vehicles')
          .onSnapshot(manageSnapshot)//Para el manejo de la BD en real time

     function manageSnapshot(snapshot){
          let vehicle = snapshot.docs.map(doc => {
               return{
                    id: doc.id,
                    ...doc.data()
               }
          });

          vehicle = _.sortBy(vehicle, 'categoryScrollView')
          dispatch({
               type: GET_VEHICLE_SUCCESSFUL,
               payload: vehicle
          });
     }
   }

   return (
        <FirebaseContext.Provider 
               value={{
                    carsCatalog: state.carsCatalog,
                    firebase,
                    getVehicles
               }}
          >
               {props.children}
        </FirebaseContext.Provider>
   );
}

export default FirebaseState;