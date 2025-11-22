import React from "react";
import { ScrollView } from "react-native";
import TrilhaCard from "../components/TrilhaCard";

export default function TrilhasScreen({ navigation }) {
  return (
    <ScrollView style={{ padding: 20 }}>
      <TrilhaCard
        title="Inteligência Artificial"
        desc="Aprenda os fundamentos da IA"
        onPress={() =>
          navigation.navigate("DetalheTrilha", { titulo: "Inteligência Artificial" })
        }
      />

      <TrilhaCard
        title="Soft Skills"
        desc="Habilidades emocionais para o futuro"
        onPress={() =>
          navigation.navigate("DetalheTrilha", { titulo: "Soft Skills" })
        }
      />

      <TrilhaCard
        title="Sustentabilidade"
        desc="Práticas modernas e responsáveis"
        onPress={() =>
          navigation.navigate("DetalheTrilha", { titulo: "Sustentabilidade" })
        }
      />
    </ScrollView>
  );
}
