import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomNavigation, IconButton, Searchbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../Stilos/Home';
import { useNavigation } from '@react-navigation/native';
import { useContextGlobal } from '../Contexto/global';

export const Home = () => {
  const { dadosUsuario } = useContextGlobal();
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = React.useState('');

  // Função para atualizar o estado do searchQuery
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  // Função para lidar com o clique no botão "Marcar Consulta"
  const handleMarcarConsulta = () => {
    navigation.navigate('MarcarConsulta'); // Navega para a tela "MarcarConsulta"
  };

  // Função para lidar com o clique no botão "Editar Consulta"
  const handleEditarConsulta = () => {
    navigation.navigate('EditarConsulta'); // Navega para a tela "EditarConsulta"
  };

  // Função para lidar com o clique no botão "Consultar Processos"
  const handleConsultaProcessos = () => {
    navigation.navigate('ConsultaProcessos'); // Navega para a tela "ConsultaProcessos"
  };

  // Função para lidar com o clique no botão de ação flutuante
  const handleFabPress = () => {
    // Lógica a ser executada quando o botão de ação flutuante for pressionado
    console.log('Botão de ação flutuante pressionado');
  };

  return (
    <View style={styles.container}>
      <View style={styles.perfil}>
        <Text style={styles.bemvindo}>Bem Vindo!</Text>
        <Text style={styles.nome}>{dadosUsuario.nome}</Text>
      </View>
      <View style={styles.fab}>
        {/* Botão "Marcar Consulta" */}
        <TouchableOpacity onPress={handleMarcarConsulta} style={styles.square}>
          <IconButton
            icon={() => (
              <MaterialCommunityIcons
                name="magnify"
                size={40}
                color="black"
                style={{ marginRight: 1 }}
              />
            )}
            style={styles.fabButton}
            label="Marcar Consulta"
          />
          <Text style={styles.text}>Marcar Consulta</Text>
        </TouchableOpacity>
        {/* Botão "Consultar Processo" */}
        <TouchableOpacity onPress={handleConsultaProcessos} style={styles.square}>
          <IconButton
            icon={() => (
              <MaterialCommunityIcons
                name="file-settings-outline"
                size={40}
                color="black"
                style={{ marginRight: 1 }}
              />
            )}
            style={styles.fabButton}
            label="Consultar Processo"
          />
          <Text style={styles.text}>Consultar Processo</Text>
        </TouchableOpacity>
        {/* Botão "Chat Privativo" */}
        <TouchableOpacity onPress={handleFabPress} style={styles.square}>
          <IconButton
            icon={() => (
              <MaterialCommunityIcons
                name="chat"
                size={35}
                color="black"
                style={{ marginRight: 1 }}
              />
            )}
            style={styles.fabButton}
            label="Chat Privativo"
          />
          <Text style={styles.text}>Chat Privativo</Text>
        </TouchableOpacity>
        {/*Botão "Editar Consulta" */}
        <TouchableOpacity onPress={handleEditarConsulta} style={styles.square}>
          <IconButton
            icon={() => (
              <MaterialCommunityIcons name="pencil" size={35} color="black" />
            )}
            style={styles.fabButton}
            label="Editar Consulta"
          />
          <Text style={styles.text}>Editar Consulta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
