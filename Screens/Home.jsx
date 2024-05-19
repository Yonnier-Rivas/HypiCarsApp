import React from 'react'
import { View, StyleSheet, ImageBackground, Image } from 'react-native'
import { Container, Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../images/white.jpg')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => navigation.navigate('CarsCatalog')}>
            <Text style={styles.buttonText}>Vehículos disponibles</Text>
          </Button>
          <Button style={styles.button} onPress={() => navigation.navigate('CarShop')}>
            <Text style={styles.buttonText}>Carrito de Compras</Text>
          </Button>
          <Button style={styles.button} onPress={() => navigation.navigate('Notifications')}>
            <Text style={styles.buttonText}>Notificaciones</Text>
          </Button>
          <Button style={styles.button} onPress={() => navigation.navigate('ServiceRequest')}>
            <Text style={styles.buttonText}>Solicitar Servicio</Text>
          </Button>
          <Button style={styles.button} onPress={() => navigation.navigate('ServiceHistory')}>
            <Text style={styles.buttonText}>Historial de Servicios</Text>
          </Button>
          <Button style={styles.button} onPress={() => navigation.navigate('DealerInformation')}>
            <Text style={styles.buttonText}>Nosotros</Text>
          </Button>
        </View>
      </ScrollView>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', //la imagen cubre toda la pantalla
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  button: {
    marginVertical: 8,
    borderRadius: 100,
    backgroundColor: '#3B63A8',
    width: 300,
    height: 50,
    shadowColor: '#000',
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
  },
});

export default Home;