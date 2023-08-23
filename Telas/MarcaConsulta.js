import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { styles } from '../Stilos/MarcarConsulta';
import { api } from '../Uteis/api';
import { useContextGlobal } from '../Contexto/global';

export function MarcarConsulta({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Função para selecionar a data
  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  // Função para selecionar o horário
  const handleTimeSelect = (time) => {
    setSelectedTime(time === selectedTime ? null : time);
  };

  const { dadosUsuario } = useContextGlobal();

  // Função para marcar a consulta
  const handleMarcarConsulta = async () => {
    if (selectedDate && selectedTime) {
      try {
        const consultaData = {
          usuario_idusuario: dadosUsuario.idusuario,
          data: selectedDate,
          horario: selectedTime,
          observacao: 'Consulta marcada',
        };

        const response = await api.post('consultas/registrar', consultaData); // Faça a chamada à API para marcar a consulta

        Alert.alert('Sucesso', response.data.mensagem, [
          { text: 'OK', onPress: () => navigation.navigate('EditarConsulta') },
        ]);
      } catch (error) {
        console.log('Erro ao marcar a consulta:', error);
        Alert.alert('Erro ao marcar consulta');
      }
    } else {
      console.log('Selecione uma data e horário para marcar a consulta');
    }
  };

  // Função para renderizar os horários disponíveis
  const renderHorarios = () => {
    const horarios = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

    return horarios.map((horario) => (
      <TouchableOpacity
        key={horario}
        onPress={() => handleTimeSelect(horario)}
        style={[
          styles.horarioButton,
          selectedTime === horario && styles.horarioButtonSelected,
        ]}
      >
        <Text
          style={[
            styles.horarioButtonText,
            selectedTime === horario && styles.horarioButtonTextSelected,
          ]}
        >
          {horario}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      <Text style={styles.txt}> SELECIONE DATA E HORÁRIO: </Text>
      {/* Componente de calendário para selecionar a data */}
      <Calendar
        style={styles.calendario}
        onDayPress={handleDateSelect}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: 'blue' },
        }}
      />
      {/* Renderização dos horários disponíveis */}
      <View style={styles.horariosContainer}>{renderHorarios()}</View>
      {/* Botão "Marcar Consulta" para marcar a consulta */}
      <TouchableOpacity
        style={styles.marcarConsultaButton}
        onPress={handleMarcarConsulta}
      >
        <Text style={styles.marcarConsultaButtonText}>Marcar Consulta</Text>
      </TouchableOpacity>
    </View>
  );
}
