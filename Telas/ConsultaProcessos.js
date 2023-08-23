import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../Stilos/ConsultaProcessos';
import { api } from '../Uteis/api';
import { useContextGlobal } from '../Contexto/global';

export function ConsultaProcessos() {
  const [processos, setProcessos] = useState([]);
  const { dadosUsuario } = useContextGlobal();

  // Função assíncrona para obter os dados dos processos do usuário
  async function pegarDados() {
    console.log(dadosUsuario.idusuario, 'dadosUsuario');

    // Requisição GET para obter os processos do usuário
    const { data } = await api.get('/processos/usuario/' + dadosUsuario.idusuario);

    // Armazena os processos obtidos no estado
    setProcessos(data);
    console.log('data', data);
  }

  // Efeito de montagem para chamar a função de obter os dados dos processos
  useEffect(() => {
    pegarDados();
  }, []);

  // Função para renderizar um item de processo na lista
  const renderProcessoItem = ({ item }) => (
    <TouchableOpacity style={styles.processoItemContainer} onPress={() => handleArquivoPress(item.arquivo)}>
      <View style={styles.processoItem}>
        <Text style={styles.processoNome}>Parte Envolvida: {item.nome}</Text>
        <Text style={styles.processoDescricao}>Número Processo: {item.numero}</Text>
        <Text style={styles.processoDescricao}>
          Processo em PDF: <Text style={styles.arquivo}>{item.arquivo}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );

  // Função para lidar com o clique em um arquivo
  const handleArquivoPress = (arquivo) => {
    // Lógica para lidar com o clique no arquivo
    console.log('Arquivo clicado:', arquivo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Consulta Processo: <Text style={styles.nome}>{dadosUsuario.nome}</Text>
      </Text>
      {/* FlatList para renderizar a lista de processos */}
      <FlatList
        data={processos}
        renderItem={renderProcessoItem}
        keyExtractor={(item) => item.idprocessos.toString()}
        contentContainerStyle={styles.processosContainer}
      />
    </View>
  );
}
