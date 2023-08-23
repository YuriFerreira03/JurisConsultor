import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Telas/Home';
import { useNavigation } from '@react-navigation/native';
import { useContextGlobal } from '../Contexto/global';
import { styles } from '../Stilos/conta';
import { api } from '../Uteis/api';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomNavigation, IconButton, Searchbar } from 'react-native-paper';

function ContaScreen() {
  const { dadosUsuario, setDadosUsuario } = useContextGlobal();
  const [isEditing, setIsEditing] = useState(false);
  const [nome, setNome] = useState(dadosUsuario.nome);
  const [email, setEmail] = useState(dadosUsuario.email);
  const [cpf, setCpf] = useState(dadosUsuario.cpf);
  const [endereco, setEndereco] = useState(dadosUsuario.endereco);
  const [telefone, setTelefone] = useState(dadosUsuario.telefone);
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();
  const { deslogar } = useContextGlobal();

  const handleSaveChanges = async () => {
    try {
      const dados = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        endereco: endereco,
        telefone: telefone,
      };
      await api.put('usuario', dados);
      setIsEditing(false);
      setDadosUsuario({ ...dadosUsuario, ...dados });
    } catch (error) {
      console.error('Erro ao atualizar os dados do usuário:', error);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirmação',
      'Deseja realmente sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          onPress: () => {
            deslogar();
            navigation.navigate('Login');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ minWidth: 380 }}>
        <Text style={styles.titulo}>Minha Conta</Text>
        <View style={styles.caixa}>
          {isEditing ? (
            <>
              <View style={styles.dadosContainer}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                  style={styles.valorInput}
                  value={nome}
                  onChangeText={setNome}
                />
              </View>
              <View style={styles.dadosContainer}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                  style={styles.valorInput}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.dadosContainer}>
                <Text style={styles.label}>CPF:</Text>
                <TextInput
                  style={styles.valorInput}
                  value={cpf}
                  onChangeText={setCpf}
                />
              </View>
              <View style={styles.dadosContainer}>
                <Text style={styles.label}>Endereço:</Text>
                <TextInput
                  style={styles.valorInput}
                  value={endereco}
                  onChangeText={setEndereco}
                />
              </View>
              <View style={styles.dadosContainer}>
                <Text style={styles.label}>Telefone:</Text>
                <TextInput
                  style={styles.valorInput}
                  value={telefone}
                  onChangeText={setTelefone}
                />
              </View>
              <View style={styles.dadosContainer}>
                <Text style={styles.label}>Senha:</Text>
                <TextInput
                  style={styles.valorInput}
                  value={senha}
                  onChangeText={setSenha}
                />
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  title="Salvar"
                  onPress={handleSaveChanges}
                  style={[styles.button, styles.salvarButton]}>
                  <Text style={styles.label}>SALVAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setIsEditing(false)}
                  style={[styles.button, styles.cancelarButton]}>
                  <Text style={styles.label}>VOLTAR</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View style={styles.dadosContainer}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.valor}>{nome}</Text>
              </View>
              <View style={styles.dadosContainer}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.valor}>{email}</Text>
              </View>
              <View style={styles.dadosContainer}>
                <Text style={styles.label}>CPF:</Text>
                <Text style={styles.valor}>{cpf}</Text>
              </View>
              <View style={styles.dadosContainer}>
                <Text style={styles.label}>Endereço:</Text>
                <Text style={styles.valor}>{endereco}</Text>
              </View>
              <View style={styles.dadosContainer}>
                <Text style={styles.label}>Telefone:</Text>
                <Text style={styles.valor}>{telefone}</Text>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => setIsEditing(true)}
                  style={[styles.button, styles.editarButton]}>
                  <Text style={styles.label}>EDITAR</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
        <TouchableOpacity
          onPress={handleLogout}
          style={{ borderRadius: 200, marginTop: 50, alignItems: 'center' }}>
          <IconButton
            icon={() => (
              <MaterialCommunityIcons name="logout" size={35} color="black" />
            )}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function NavegacaoBaixo() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d2d2d2',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Conta" component={ContaScreen} />
    </Tab.Navigator>
  );
}
