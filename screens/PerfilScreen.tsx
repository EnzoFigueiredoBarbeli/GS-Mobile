import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function PerfilScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Meu Perfil</Text>
      <Text style={globalStyles.text}>Progresso, dados e preferências.</Text>
    </View>
  );
}
