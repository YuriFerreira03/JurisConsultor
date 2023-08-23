import React from 'react';
import {Home} from './Telas/Home';
import {NavegacaoBaixo} from "./Routes/navegacaoBaixo";
import {NavegacaoTotal} from "./Routes/navegacaoTotal";
import {ContextoGlobal} from "./Contexto/global";
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <ContextoGlobal>
    <NavegacaoTotal />
    </ContextoGlobal>
    </NavigationContainer>
    )
}

