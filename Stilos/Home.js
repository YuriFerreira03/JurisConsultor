import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#b0b0b0'
  },
  searchbar: {
    width: '80%',
    height: 40,
    borderRadius: 20,
    marginTop: 60,
    backgroundColor: '#e0e0e0',
  },
  input: {
    fontSize: 16,
    color: '#888',
  },
  fab: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  square: {
    width: 250,
    height: 100,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  bemvindo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: -25,

  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CD964',
  },
});

export default styles;
