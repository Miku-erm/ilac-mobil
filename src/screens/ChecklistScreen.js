import React, { useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { CHECKLIST } from "../data/checklist";

export default function ChecklistScreen() {
  const [done, setDone] = useState({});
  const toggle = (i) => setDone((d) => ({ ...d, [i]: !d[i] }));
  const completed = Object.values(done).filter(Boolean).length;

  return (
    <View style={{ flex: 1, backgroundColor: "#F3F7FC", padding: 16 }}>
      <View style={{ backgroundColor: "white", borderRadius: 16, padding: 14, borderWidth: 1, borderColor: "#E6EEF8", marginBottom: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: "900", color: "#102A43" }}>Kontrol Listesi</Text>
        <Text style={{ marginTop: 6, color: "#486581" }}>Tamamlanan: {completed}/{CHECKLIST.length}</Text>
      </View>

      <FlatList
        data={CHECKLIST}
        keyExtractor={(_, idx) => String(idx)}
        renderItem={({ item, index }) => {
          const active = !!done[index];
          return (
            <Pressable
              onPress={() => toggle(index)}
              style={{
                backgroundColor: active ? "#E9F7EF" : "white",
                borderColor: active ? "#4CAF50" : "#E6EEF8",
                borderWidth: 1,
                borderRadius: 14,
                padding: 14,
                marginBottom: 10,
              }}
            >
              <Text style={{ fontWeight: "800", color: "#102A43" }}>{active ? "✅ " : "⬜ "} {item}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}