import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleLogin() {
    if (user === "" || pass === "") {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    navigation.replace("Tabs");
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>SkillUpPlus 2030+</Text>

      <TextInput
        placeholder="Usuário"
        style={globalStyles.input}
        value={user}
        onChangeText={setUser}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={globalStyles.input}
        value={pass}
        onChangeText={setPass}
      />

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
