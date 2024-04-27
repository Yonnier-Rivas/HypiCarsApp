import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Card, Text } from 'react-native-paper';

const Notifications = () => (
    <ScrollView>
        <Card mode='outlined' style={{ margin: 10 }}>
            <Card.Content>
                <Card.Title
                    title="Bienvenido a HipyCars"
                    left={(props) => (
                        <Avatar.Image
                            {...props}
                            source={require('../images/iconCar.jpg')}
                            size={50}// Tamaño del avatar
                        />
                    )}
                />
                <Text variant="bodyMedium">Aqui podras encontrar el carro de tus sueños con las mejores ofertas.</Text>
            </Card.Content>
        </Card>

        <Card mode='outlined' style={{ margin: 10 }}>
            <Card.Content>
                <Card.Title
                    title="Mantenimiento preventivo"
                    left={(props) => (
                        <Avatar.Image
                            {...props}
                            source={require('../images/iconAjustes.jpg')}
                            size={50}// Tamaño del avatar
                        />
                    )}
                />
                <Text variant="bodyMedium">Tienes agendada una cita para un mantenimiento preventivo</Text>
            </Card.Content>
        </Card>

    </ScrollView>
);

export default Notifications;

