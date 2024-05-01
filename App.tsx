import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import firebase from './firebaseDB/index';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';
import CarDetail from './Screens/CarDetail';
import CarsCatalog from './Screens/CarsCatalog';
import DriveTest from './Screens/DriveTest';
import Notifications from './Screens/Notifications';
import ServiceHistory from './Screens/ServiceHistory';
import ServiceRequest from './Screens/ServiceRequest';
import DealerInformation from './Screens/DealerInformation';
import RequestQuote from './Screens/RequestQuote';

import FirebaseState from './context/firebase/firebaseState';
import RequestState from './context/requests/requestState';
import { NativeBaseProvider } from 'native-base';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    const testDatabaseConnection = async () => {
        try {
            await firebase.db; // Prueba la conexión a Firestore
            console.log('Conexión a la base de datos exitosa holaaaa');
        } catch (error) {
            console.error('Error al conectar a la base de datos:', error);
        }
    };

    testDatabaseConnection();
}, []);
  
  return (
    <NativeBaseProvider>
      <FirebaseState>
      <RequestState>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle:{
                backgroundColor: '#EDEEEF'
              },
              headerTitleStyle:{
                fontWeight: 'bold',
                color: '#3B63A8',
              },

              //Se ha habilitado la navegación por gestos deslizando horizontalmente.
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              headerTitleAlign: 'center'
            }}>
            <Stack.Screen name="Home" component={Home} 
              options={{title: 'HypiCars'}} 
            />
            <Stack.Screen name="CarDetail" component={CarDetail} 
              options={{title: 'Detalle de Vehículo'}} 
            />
            <Stack.Screen name="CarsCatalog" component={CarsCatalog} 
              options={{title: 'Vehículos disponibles'}} 
            />
            <Stack.Screen name="DriveTest" component={DriveTest} 
              options={{title: 'Prueba de Manejo'}}
            />
            <Stack.Screen name="Notifications" component={Notifications} 
              options={{title: 'Notificaciones'}} 
            />
            <Stack.Screen name="ServiceHistory" component={ServiceHistory} 
              options={{title: 'Historial de Servicio'}}
             />
            <Stack.Screen name="ServiceRequest" component={ServiceRequest}
              options={{title: 'Solicitud de Servicio'}}
            />
            <Stack.Screen name="DealerInformation" component={DealerInformation}
              options={{title: 'Concesionario'}}
            />
            <Stack.Screen name="RequestQuote" component={RequestQuote}
              options={{title: 'Cotizar'}}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </RequestState>
    </FirebaseState>
    </NativeBaseProvider>
    
  );
};

export default App;
