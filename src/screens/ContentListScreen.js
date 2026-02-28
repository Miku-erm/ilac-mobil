import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { CONTENT } from "../data/content";

export default function ContentListScreen({ navigation }) {
  const [filter, setFilter] = useState("Hepsi");
  const categories = ["Hepsi", "Güvenli Kullanım", "Antibiyotik", "Yan Etkiler"];
  const data = filter === "Hepsi" ? CONTENT : CONTENT.filter((x) => x.category === filter);

  return (
    <View style={{ flex: 1, backgroundColor: "#F3F7FC", padding: 16 }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
        {categories.map((c) => {
          const active = c === filter;
          return (
            <Pressable
              key={c}
              onPress={() => setFilter(c)}
              style={{
                backgroundColor: active ? "#1565C0" : "white",
                borderColor: "#E6EEF8",
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 10,
                borderRadius: 999,
              }}
            >
              <Text style={{ color: active ? "white" : "#102A43", fontWeight: "800", fontSize: 12 }}>{c}</Text>
            </Pressable>
          );
        })}
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Detail", { id: item.id })}
            style={{ backgroundColor: "white", borderRadius: 14, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: "#E6EEF8" }}
          >
            <Text style={{ fontSize: 16, fontWeight: "900", color: "#102A43" }}>{item.title}</Text>
            <Text style={{ marginTop: 6, color: "#486581" }}>{item.summary}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}