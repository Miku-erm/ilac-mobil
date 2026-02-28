import React, { useMemo, useState } from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import { CONTENT } from "../data/content";

export default function SearchScreen({ navigation }) {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return CONTENT.filter((x) => (x.title + " " + x.body).toLowerCase().includes(s));
  }, [q]);

  return (
    <View style={{ flex: 1, backgroundColor: "#F3F7FC", padding: 16 }}>
      <TextInput
        value={q}
        onChangeText={setQ}
        placeholder="Arama: örn. antibiyotik"
        style={{ backgroundColor: "white", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: "#E6EEF8" }}
      />

      {!q.trim() ? (
        <View style={{ marginTop: 12, backgroundColor: "white", borderRadius: 14, padding: 14, borderWidth: 1, borderColor: "#E6EEF8" }}>
          <Text style={{ color: "#486581" }}>Arama yapmak için yukarıya yaz.</Text>
        </View>
      ) : results.length === 0 ? (
        <View style={{ marginTop: 12, backgroundColor: "white", borderRadius: 14, padding: 14, borderWidth: 1, borderColor: "#E6EEF8" }}>
          <Text style={{ fontWeight: "900", color: "#102A43" }}>Sonuç yok</Text>
          <Text style={{ marginTop: 6, color: "#486581" }}>Farklı bir kelime dene.</Text>
        </View>
      ) : (
        <FlatList
          style={{ marginTop: 12 }}
          data={results}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("Detail", { id: item.id })}
              style={{ backgroundColor: "white", borderRadius: 14, padding: 14, borderWidth: 1, borderColor: "#E6EEF8", marginBottom: 10 }}
            >
              <Text style={{ fontWeight: "900", color: "#102A43" }}>{item.title}</Text>
              <Text style={{ marginTop: 6, color: "#486581" }}>{item.summary}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}