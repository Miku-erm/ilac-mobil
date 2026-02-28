import React, { useState } from "react";
import { View, Text, Pressable, FlatList, TextInput } from "react-native";
import { REMINDERS_SEED } from "../data/reminders";

export default function RemindersScreen() {
  const [items, setItems] = useState(REMINDERS_SEED);
  const [text, setText] = useState("");

  const add = () => {
    const t = text.trim();
    if (!t) return;
    setItems((x) => [{ id: String(Date.now()), title: t }, ...x]);
    setText("");
  };

  const clearAll = () => setItems([]);

  return (
    <View style={{ flex: 1, backgroundColor: "#F3F7FC", padding: 16 }}>
      <View style={{ backgroundColor: "white", borderRadius: 16, padding: 14, borderWidth: 1, borderColor: "#E6EEF8", marginBottom: 12 }}>
        <Text style={{ fontWeight: "900", color: "#102A43" }}>Hatırlatıcı</Text>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="örn: 14:00 - İlacımı al"
          style={{ marginTop: 10, backgroundColor: "#F3F7FC", borderRadius: 12, padding: 10, borderWidth: 1, borderColor: "#E6EEF8" }}
        />

        <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
          <Pressable onPress={add} style={{ flex: 1, backgroundColor: "#1565C0", padding: 12, borderRadius: 12, alignItems: "center" }}>
            <Text style={{ color: "white", fontWeight: "900" }}>Ekle</Text>
          </Pressable>
          <Pressable onPress={clearAll} style={{ padding: 12, borderRadius: 12, borderWidth: 1, borderColor: "#1565C0", alignItems: "center" }}>
            <Text style={{ color: "#1565C0", fontWeight: "900" }}>Temizle</Text>
          </Pressable>
        </View>
      </View>

      {items.length === 0 ? (
        <View style={{ backgroundColor: "white", borderRadius: 14, padding: 14, borderWidth: 1, borderColor: "#E6EEF8" }}>
          <Text style={{ fontWeight: "900", color: "#102A43" }}>Henüz hatırlatıcı yok</Text>
          <Text style={{ marginTop: 6, color: "#486581" }}>Yukarıdan yeni bir hatırlatıcı ekleyebilirsin.</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: "white", borderRadius: 14, padding: 14, borderWidth: 1, borderColor: "#E6EEF8", marginBottom: 10 }}>
              <Text style={{ fontWeight: "800", color: "#102A43" }}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}