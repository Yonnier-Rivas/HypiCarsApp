import React, {useReducer} from "react";
import firebase from "../../firebaseDB";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";



const FirebaseState = props => {
    //Crear el estado inicial
   const inicialState ={
        carsCatalog: []
   }

   //definir el useReducer
   const [state, dispatch] = useReducer(FirebaseReducer,inicialState);
   return (
        <FirebaseContext.Provider 
               value={{
                         carsCatalog: state.carsCatalog,
                         firebase
               }}
          >
               {props.children}
        </FirebaseContext.Provider>
   );
}

export default FirebaseState;