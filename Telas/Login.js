import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from '../Stilos/Login';
import backgroundImg from '../Imagens/imagemfundo.png';
import logo from '../Imagens/Logo.png';
import { useNavigation } from '@react-navigation/native';
import { useContextGlobal } from '../Contexto/global';
import axios from 'axios';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [menssagem, setMenssagem] = useState('');
  const [mostrarErro, setMostrarErro] = useState(false);
  const navigation = useNavigation();
  const { setDadosUsuario, verificarLogin } = useContextGlobal();

  // Função assíncrona para realizar o login
  async function logar() {
    try {
      const sucesso = await verificarLogin(email, senha);
      navigation.navigate('NavegacaoBaixo'); // Navega para a tela "NavegacaoBaixo" após o login bem-sucedido
    } catch (erro) {
      setMenssagem('EMAIL OU SENHA INVÁLIDOS!');
      setMostrarErro(true);
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <ImageBackground source={backgroundImg} style={{ flex: 1 }}>
          <View style={styles.quadradoPrincipal}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
            </View>
            <Text style={styles.jurisConsultor}>
              <Text style={{ color: '#4CD964' }}>Juris</Text>Consultor
            </Text>
            {/* Campo de entrada de email */}
            <TextInput
              label="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
            />
            {/* Campo de entrada de senha */}
            <TextInput
              label="Senha"
              secureTextEntry
              right={<TextInput.Icon name="eye" />}
              onChangeText={(text) => setSenha(text)}
              style={styles.textInput}
            />
            {/* Exibir mensagem de erro, se houver */}
            {mostrarErro && (
              <View style={styles.errorBox}>
                <Text style={styles.textAlert}>{menssagem}</Text>
              </View>
            )}
            {/* Botão "ENTRAR" para realizar o login */}
            <TouchableOpacity onPress={logar} style={styles.entrar}>
              <Text style={styles.entrarTexto}>ENTRAR</Text>
            </TouchableOpacity>
            {/* Opção "ESQUECEU SUA SENHA" */}
            <TouchableOpacity style={styles.acesso}>
              <Text style={styles.acessoTexto}>ESQUECEU SUA SENHA</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
