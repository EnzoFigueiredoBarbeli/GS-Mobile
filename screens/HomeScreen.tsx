import React from "react";
import { View, Text, ScrollView } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function HomeScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={globalStyles.title}>Bem-vindo!</Text>
      <Text style={globalStyles.text}>
        Aqui você encontra trilhas curtas de requalificação digital para o futuro do trabalho.
      </Text>
    </ScrollView>
  );
}
