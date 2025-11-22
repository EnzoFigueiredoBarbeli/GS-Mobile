import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function TrilhaCard({ title, desc, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={globalStyles.card}>
      <Text style={globalStyles.cardTitle}>{title}</Text>
      <Text>{desc}</Text>
    </TouchableOpacity>
  );
}
