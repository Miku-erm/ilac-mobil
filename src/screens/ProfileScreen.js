import React from "react";
import { View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F3F7FC" }}>
      <View style={{ backgroundColor: "#1565C0", padding: 16 }}>
        <Text style={{ color: "white", fontWeight: "900", fontSize: 18 }}>kubra</Text>
        <Text style={{ color: "white", opacity: 0.9, marginTop: 4 }}>kubra@example.com</Text>
      </View>

      <View style={{ padding: 16, gap: 12 }}>
        <View style={{ backgroundColor: "white", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#E6EEF8" }}>
          <Text style={{ fontWeight: "900", color: "#102A43" }}>Profil</Text>
          <Text style={{ marginTop: 6, color: "#486581" }}>İstatistik ve kayıtlar buraya eklenebilir.</Text>
        </View>

        <View style={{ backgroundColor: "white", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#E6EEF8" }}>
          <Text style={{ fontWeight: "900", color: "#102A43" }}>Hedef</Text>
          <Text style={{ marginTop: 6, color: "#486581" }}>
            Akılcı ilaç kullanımını desteklemek ve doğru adımları öğretmek.
          </Text>
        </View>
      </View>
    </View>
  );
}