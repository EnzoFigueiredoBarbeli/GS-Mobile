import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import globalStyles from "../styles/globalStyles";

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [area, setArea] = useState("IA");

  // Verifica se usuário já está logado
  useEffect(() => {
    async function checkLogin() {
      const savedUser = await AsyncStorage.getItem("user");
      const savedPass = await AsyncStorage.getItem("pass");
      if (savedUser && savedPass) {
        navigation.replace("Tabs");
      }
    }
    checkLogin();
  }, [navigation]);

  async function handleLogin() {
    if (!user || !pass) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    try {
      await AsyncStorage.setItem("user", user);
      await AsyncStorage.setItem("pass", pass);
      await AsyncStorage.setItem("area", area);
    } catch (e) {
      console.log("Erro ao salvar dados:", e);
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

      <Text style={{ marginBottom: 8 }}>Área de Interesse:</Text>
      <Picker
        selectedValue={area}
        onValueChange={(itemValue: string) => setArea(itemValue)}
        style={{ marginBottom: 15 }}
      >
        <Picker.Item label="Inteligência Artificial" value="IA" />
        <Picker.Item label="Soft Skills" value="SoftSkills" />
        <Picker.Item label="Sustentabilidade" value="Sustentabilidade" />
      </Picker>

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
