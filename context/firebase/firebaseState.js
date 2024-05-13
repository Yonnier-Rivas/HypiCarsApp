import React, {useReducer} from "react";
import firebase from "../../firebaseDB";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";
import { GET_VEHICLE_SUCCESSFUL, GET_HISTORY_SUCCESSFUL } from '../../types'
import _ from 'lodash'


const FirebaseState = props => {
    //Crear el estado inicial
     const inicialState ={
        carsCatalog: [],
        historyCatalog: []
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

   const getServiceRequest = () =>{
     firebase.db
          .collection('ServiceRequests')
          .onSnapshot(manageSnapshot)//Para el manejo de la BD en real time

     function manageSnapshot(snapshot){
          let services = snapshot.docs.map(doc => {
               return{
                    id: doc.id,
                   ...doc.data()
               }
          }) 

          services = _.sortBy(services, 'typeServiceScrollView')
          dispatch({
               type: GET_HISTORY_SUCCESSFUL,
               payload: services
          });
     }
   }

   return (
        <FirebaseContext.Provider 
               value={{
                    carsCatalog: state.carsCatalog,
                    historyCatalog: state.historyCatalog,
                    firebase,
                    getVehicles,
                    getServiceRequest         
               }}
          >
               {props.children}
        </FirebaseContext.Provider>
   );
}

export default FirebaseState;