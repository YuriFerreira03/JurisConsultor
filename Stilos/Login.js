import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 80,
  },
  logo: {
    width: 80,
    height: 100,
    marginRight: 10,
    marginBottom: 70,
  },
  jurisConsultor: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    marginTop: -30, 
    margin: 60,
  },
  quadradoPrincipal: {
    flex: 1,
    marginTop: 70,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 50,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  entrar: {
    backgroundColor: '#4CD964',
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 50,
  },
  entrarTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    acesso: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 50,
  },
  acessoTexto: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorBox: {
    backgroundColor: '#ff574d',
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 50,
    alignItems: "center"
  },
  bemvindo:{
    
  }
});
