import React from 'react'
import { View} from 'react-native'
import globalstyles from '../styles/global';
import {Container, Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
    return(
        <Container>
            <View>
                <Button
                    onPress={()=>navigation.navigate('CarsCatalog')}
                >
                    <Text>Ver Vehículos disponibles</Text>
                </Button>

                <Button
                    onPress={()=>navigation.navigate('CarDetail')}
                >
                    <Text>Ver detalle de Vehículos</Text>
                </Button>

                <Button
                    onPress={()=>navigation.navigate('DriveTest')}
                >
                    <Text>Solicitar Prueba de Manejo</Text>
                </Button>

                <Button
                    onPress={()=>navigation.navigate('Notifications')}
                >
                    <Text>Ver Notificaciones</Text>
                </Button>

                <Button
                    onPress={()=>navigation.navigate('ServiceHistory')}
                >
                    <Text>Ver Historial de Servicios</Text>
                </Button>

                <Button
                    onPress={()=>navigation.navigate('ServiceRequest')}
                >
                    <Text>Solicitar Servicio</Text>
                </Button>


            </View>
        </Container>
    )
};

export default Home;
