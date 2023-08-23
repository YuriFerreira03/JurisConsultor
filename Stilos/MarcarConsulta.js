import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  calendario: {
    marginTop: 50,
  },
  txt:{
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
  },
   texto: {
    color: '#645b5a',
    fontSize: 18,
    marginBottom: 10,
  },
  marcarConsultaText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  horariosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30,
  },
  horarioButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 5,
  },
  horarioButtonText: {
    color: '#000000',
    fontSize: 16,
  },
  horarioButtonSelected: {
    backgroundColor: '#4040ff',
  },
  horarioButtonTextSelected: {
    fontWeight: 'bold',
  },
  marcarConsultaButton: {
    backgroundColor: '#645b5a',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  marcarConsultaButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
