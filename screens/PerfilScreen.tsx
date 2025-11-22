import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import globalStyles from "../styles/globalStyles";

type PerfilScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Tabs">;

type Props = {
  navigation: PerfilScreenNavigationProp;
};

export default function PerfilScreen({ navigation }: Props) {
  const [user, setUser] = useState("");
  const [area, setArea] = useState("");

  useEffect(() => {
    async function loadData() {
      const savedUser = await AsyncStorage.getItem("user");
      const savedArea = await AsyncStorage.getItem("area");
      if (savedUser) setUser(savedUser);
      if (savedArea) setArea(savedArea);
    }
    loadData();
  }, []);

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.replace("Login");
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Meu Perfil</Text>
      <Text style={globalStyles.text}>Usuário: {user}</Text>
      <Text style={globalStyles.text}>Área de Interesse: {area}</Text>

      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
}

