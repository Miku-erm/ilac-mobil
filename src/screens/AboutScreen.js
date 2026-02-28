import React from "react";
import { View, Text } from "react-native";

export default function AboutScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F3F7FC", padding: 16 }}>
      <View style={{ backgroundColor: "white", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#E6EEF8" }}>
        <Text style={{ fontWeight: "900", color: "#102A43", fontSize: 16 }}>Hakkında</Text>
        <Text style={{ marginTop: 8, color: "#486581", lineHeight: 20 }}>
          Bu uygulama akılcı ilaç kullanımını desteklemek için hazırlanmış demo bir projedir.
        </Text>
      </View>
    </View>
  );
}