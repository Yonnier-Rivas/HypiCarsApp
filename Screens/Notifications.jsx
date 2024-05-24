import React, { useState, useEffect,useContext } from 'react';
import { ScrollView, Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import FirebaseContext from '../context/firebase/firebaseContext';

const Notifications = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const { offersCatalog, getOffers } = useContext(FirebaseContext);

  useEffect(() => {
    setShowModal(true); // Mostrar el Modal al cargar el componente
  }, []);
  useEffect(() => {
    getOffers();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ScrollView>
        <Card mode="outlined" style={{ margin: 10 }}>
          <Card.Content>
            <Card.Title
              title="Bienvenido a HipyCars"
              left={(props) => (
                <Avatar.Image {...props} source={require('../images/iconCar.jpg')} size={50} />
              )}
            />
            <Text style={styles.text}>
              Aquí podrás encontrar el carro de tus sueños con las mejores ofertas.
            </Text>
          </Card.Content>
        </Card>
        <Card mode="outlined" style={{ margin: 10 }}>
          <Card.Content>
            <Card.Title
              title="Mantenimiento preventivo"
              left={(props) => (
                <Avatar.Image {...props} source={require('../images/iconAjustes.jpg')} size={50} />
              )}
            />
            <Text style={styles.text}>
              Tienes agendada una cita para un mantenimiento preventivo.
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>
      <Modal visible={showModal} transparent={true} onRequestClose={toggleModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image source={require('../images/4runner.png')} style={styles.cardImage} />
                        <View style={styles.horizontalLine} />
                        <Text style={styles.cardTitle}>Aprovecha nuestras excelentes promociones</Text>
                        {offersCatalog.map((offer) => (
                            <View key={offer.id}>
                                <Text>{offer.description}</Text>
                                <View style={styles.horizontalLine} />
                            </View>
                        ))}
                        <Text style={styles.cotizarText}>Cotiza ahora</Text>
                        <View style={styles.ctaContainer}>
                            <TouchableOpacity style={styles.ctaButton} onPress={toggleModal}>
                                <Text style={styles.ctaText}>Salir</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('CarsCatalog')}>
                                <Text style={styles.ctaText}>Ver más</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

    </>  
  );
};

const styles = StyleSheet.create({
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
  text: {
    fontSize: 16,
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

export default Notifications;