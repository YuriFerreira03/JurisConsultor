import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../Uteis/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

// Criação do contexto
const Contexto = createContext({});

// Função assíncrona para salvar o token no AsyncStorage
async function salvarToken(token) {
  return AsyncStorage.setItem('token', token);
}

export function ContextoGlobal({ children }) {
  const navigation = useNavigation();

  function deslogar() {
  // Remove o token do AsyncStorage
  AsyncStorage.removeItem('token');

  // Remove o token dos headers da API
  delete api.defaults.headers['Authorization'];

  // Atualiza o estado com um objeto vazio
  setDadosUsuario({});
  }

  // Função para realizar o login automaticamente se houver um token salvo
  async function loginAutomatico() {
    const tokenSalvo = await AsyncStorage.getItem('token');
    if (tokenSalvo) {
      // Configura o token nos headers da API para autenticação
      api.defaults.headers['Authorization'] = tokenSalvo;

      // Faz uma requisição GET para obter os dados do usuário
      const { data } = await api.get('dados-usuario');

      // Atualiza o estado com os dados do usuário
      setDadosUsuario(data);

      // Navega para a tela 'NavegacaoBaixo'
      navigation.navigate('NavegacaoBaixo');
    }
  }

  // Hook useEffect para chamar loginAutomatico() quando o componente é montado
  useEffect(() => {
    loginAutomatico();
  }, []);

  // Estado para armazenar os dados do usuário
  const [dadosUsuario, setDadosUsuario] = useState({});

  // Função para verificar o login do usuário
  async function verificarLogin(email, senha) {
    var userObj = { email: email, senha: senha };

    // Faz uma requisição POST para realizar o login
    const { data, headers } = await api.post('login', userObj);

    // Obtém o token dos headers da resposta
    const token = headers['x-access-token'];

    if (token) {
      // Atualiza o estado com os dados do usuário
      setDadosUsuario(data);

      // Salva o token no AsyncStorage
      await salvarToken(token);

      // Configura o token nos headers da API para autenticação
      api.defaults.headers['Authorization'] = token;

      return true; // Retorna true se o login for válido
    }

    return false; // Retorna false se o login for inválido
  }

  return (
    <Contexto.Provider
      value={{ dadosUsuario, setDadosUsuario, verificarLogin, deslogar }}>
      {children}
    </Contexto.Provider>
  );
}

// Hook personalizado para utilizar o contexto
export const useContextGlobal = () => useContext(Contexto);
