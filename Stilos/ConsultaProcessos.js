import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  nome: {
    fontWeight: 'bold',
    color: "#4CD964"
  },
  processoItemContainer: {
    marginBottom: 20,
    backgroundColor: '#d5d5d5',
    borderRadius: 8,
    padding: 10,
    marginTop: 70,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  processoNome: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  processoDescricao: {
    marginBottom: 5,
  },
  arquivo: {
    fontWeight: 'bold',
  },
  processosContainer: {
    flexGrow: 1,
  },
});

export { styles };
