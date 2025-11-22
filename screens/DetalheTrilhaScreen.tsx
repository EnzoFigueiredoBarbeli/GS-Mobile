import React from "react";
import { View, Text, Button } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function DetalheTrilhaScreen({ route, navigation }) {
  const { titulo } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{titulo}</Text>
      <Text style={globalStyles.text}>
        Aqui vão os conteúdos detalhados da trilha selecionada.
      </Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
