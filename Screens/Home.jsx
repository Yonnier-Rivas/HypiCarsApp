import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Image, Modal, TouchableOpacity, Text } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
  const navigation = useNavigation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true); // Mostrar el Modal al cargar la aplicación
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleViewMore = () => {
    togglePopup(); // Cierra el modal
    navigation.navigate('CarsCatalog'); // Navega a CarsCatalog
  };


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

        <Modal visible={showPopup} transparent={true} onRequestClose={togglePopup}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={require('../images/offers_Corolla.png')} style={styles.cardImage} />
              <View style={styles.horizontalLine} />
              <Text style={styles.cardTitle}>Ofertas exclusivas del mes de las madres</Text>
              <View style={styles.horizontalLine} />
              <Text style={styles.cotizarText}>Cotiza ahora</Text>
              <View style={styles.ctaContainer}>
                <TouchableOpacity style={styles.ctaButton} onPress={togglePopup}>
                  <Text style={styles.ctaText}>Salir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ctaButton} onPress={handleViewMore}>
                  <Text style={styles.ctaText}>Ver más</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  cardImage: {
    width: '102%',
    height: 245,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 10,
  },
  ctaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  ctaButton: {
    backgroundColor: '#3B63A8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  ctaText: {
    color: 'white',
    fontWeight: 'bold',
  },
  horizontalLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 5,
  },
  cotizarText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    alignSelf: 'flex-start',
  },
});

export default Home;