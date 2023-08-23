import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { api } from '../Uteis/api';
import { useContextGlobal } from '../Contexto/global';

export const EditarConsulta = () => {
  const navigation = useNavigation();
  const [consultas, setConsultas] = useState([]);
  const { dadosUsuario } = useContextGlobal();

  useEffect(() => {
    fetchConsultas();
  }, []);

  // Função assíncrona para buscar as consultas do usuário
  const fetchConsultas = async () => {
    try {
      const response = await api.get('consultas');
      setConsultas(response.data);
    } catch (error) {
      console.error('Erro ao obter as consultas:', error);
    }
  };

  // Função para editar uma consulta
  const handleEditConsulta = (consultaId) => {
    navigation.navigate('MarcarConsulta', { consultaId });
  };

  // Função para remover uma consulta
  const handleRemoveConsulta = (consultaId) => {
    Alert.alert(
      'Remover Consulta',
      'Deseja desmarcar esta consulta?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: async () => {
            try {
              await api.delete(`consultas/${consultaId}`);
              fetchConsultas();
            } catch (error) {
              console.error('Erro ao remover a consulta:', error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  // Função para visualizar uma consulta
  const handleViewConsulta = (consultaId) => {
    navigation.navigate('VisualizarConsulta', { consultaId });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ minWidth: 400 }}>
        <Text style={styles.title}>Consultas do Usuário:
         <Text style={styles.userName}> {dadosUsuario.nome}</Text>
        </Text>
        {/* Mapeamento das consultas e renderização dos cards */}
        {consultas.map((consulta) => (
          <View style={styles.consultaCard} key={consulta.id}>
            <Text style={styles.cardText}>
              Data: {consulta.data.substring(0, 10)}
            </Text>
            <Text style={styles.cardText}>Horário: {consulta.horario}</Text>
            <Text style={styles.cardText}>
              Observação: {consulta.observacao}
            </Text>
            {/* Botões para remover e visualizar a consulta */}
            <View style={styles.buttonContainer}>
              <IconButton
                icon={() => (
                  <MaterialCommunityIcons
                    name="delete"
                    size={25}
                    color="black"
                  />
                )}
                onPress={() => handleRemoveConsulta(consulta.idconsultas)}
              />
              <IconButton
                icon={() => (
                  <MaterialCommunityIcons name="eye" size={25} color="black" />
                )}
                onPress={() => handleViewConsulta(consulta.idconsultas)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  consultaCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
    marginTop: 5,
  },
  cardText: {
    marginBottom: 5,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userName:{
    color: "#4CD964"
  }
});
