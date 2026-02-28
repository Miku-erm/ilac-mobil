import React, { useMemo } from "react";
import { View, Text, ScrollView } from "react-native";
import { CONTENT } from "../data/content";

export default function DetailScreen({ route }) {
  const { id } = route.params || {};
  const item = useMemo(() => CONTENT.find((x) => x.id === id), [id]);

  if (!item) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>İçerik bulunamadı</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F3F7FC" }} contentContainerStyle={{ padding: 16 }}>
      <View style={{ backgroundColor: "white", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#E6EEF8" }}>
        <Text style={{ color: "#1565C0", fontWeight: "900" }}>{item.category}</Text>
        <Text style={{ marginTop: 8, fontSize: 20, fontWeight: "900", color: "#102A43" }}>{item.title}</Text>
        <Text style={{ marginTop: 12, color: "#243B53", lineHeight: 20 }}>{item.body}</Text>
      </View>
    </ScrollView>
  );
}