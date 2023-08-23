import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: "center",
    marginTop: 30
  },
  caixa: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginTop: 30,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  dadosContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  valorInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  valor: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  salvarButton: {
    backgroundColor: '#b6b5c4',
    color: '#fff',
  },
  cancelarButton: {
    backgroundColor: '#686770',
    color: '#333',
  },
  editarButton: {
    backgroundColor: '#686770',
    color: '#fff',
  },
  logout: {
    backgroundColor: '#e32636',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 30,
  },
});
