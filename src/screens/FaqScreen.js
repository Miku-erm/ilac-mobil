import React from "react";
import { View, Text, FlatList } from "react-native";
import { FAQ } from "../data/faq";

export default function FaqScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F3F7FC", padding: 16 }}>
      <FlatList
        data={FAQ}
        keyExtractor={(item, idx) => item.q + idx}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "white", borderRadius: 14, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: "#E6EEF8" }}>
            <Text style={{ fontWeight: "900", color: "#102A43" }}>{item.q}</Text>
            <Text style={{ marginTop: 8, color: "#486581", lineHeight: 20 }}>{item.a}</Text>
          </View>
        )}
      />
    </View>
  );
}