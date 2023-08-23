import { createStackNavigator } from '@react-navigation/stack';
import { MarcarConsulta } from "../Telas/MarcaConsulta";
import { NavegacaoBaixo } from './navegacaoBaixo';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../Telas/Login';
import { ConsultaProcessos } from '../Telas/ConsultaProcessos';
import { EditarConsulta } from '../Telas/EditarConsulta';

const Stack = createStackNavigator();

export function NavegacaoTotal() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d2d2d2',
        },
        headerShown: false, // Ocultar o cabeçalho em todas as telas
      }}
    >
      {/* Definição das telas e suas configurações */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} // Ocultar o cabeçalho na tela de login
      />
      <Stack.Screen
        name="MarcarConsulta"
        component={MarcarConsulta}
        options={{ headerShown: true }} // Mostrar o cabeçalho na tela de marcação de consulta
      />
      <Stack.Screen
        name="NavegacaoBaixo"
        component={NavegacaoBaixo}
        options={{ headerShown: false }} // Ocultar o cabeçalho na tela de navegação inferior
      />
      <Stack.Screen
        name="ConsultaProcessos"
        component={ConsultaProcessos}
        options={{ headerShown: true }} // Mostrar o cabeçalho na tela de consulta de processos
      />
      <Stack.Screen 
        name="EditarConsulta"
        component={EditarConsulta}
        options={{ headerShown: true }} // Mostrar o cabeçalho na tela de edição de consulta
      />
    </Stack.Navigator>
  );
}
