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

import FirebaseState from './context/firebase/firebaseState';
import RequestState from './context/requests/requestState';
import { NativeBaseProvider } from 'native-base';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    const testDatabaseConnection = async () => {
        try {
            await firebase.db(); // Prueba la conexión a Firestore
            console.log('Conexión a la base de datos exitosa');
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
                backgroundColor: '#FFDA00'
              },
              headerTitleStyle:{
                fontWeight: 'bold'
              }
            }}>
            <Stack.Screen name="Home" component={Home} 
              options={{title: 'HypiCars'}} 
            />
            <Stack.Screen name="CarDetail" component={CarDetail} />
            <Stack.Screen name="CarsCatalog" component={CarsCatalog} />
            <Stack.Screen name="DriveTest" component={DriveTest} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="ServiceHistory" component={ServiceHistory} />
            <Stack.Screen name="ServiceRequest" component={ServiceRequest} />
          </Stack.Navigator>
        </NavigationContainer>
      </RequestState>
    </FirebaseState>
    </NativeBaseProvider>
    
  );
};

export default App;
