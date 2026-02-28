import React, { useMemo, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { QUIZ } from "../data/quiz";

const letters = ["A", "B", "C", "D"];

export default function QuizScreen() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const q = useMemo(() => QUIZ[index], [index]);

  const choose = (i) => setSelected(i);

  const next = () => {
    if (selected === null) return;
    setSelected(null);
    setIndex((x) => (x + 1 >= QUIZ.length ? 0 : x + 1));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F3F7FC" }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontWeight: "900", color: "#102A43", fontSize: 18 }}>
          {index + 1}/{QUIZ.length}
        </Text>

        <View style={{ backgroundColor: "white", borderRadius: 16, padding: 16, marginTop: 10, borderWidth: 1, borderColor: "#E6EEF8" }}>
          <Text style={{ color: "#102A43", fontWeight: "900" }}>{q.question}</Text>
        </View>

        {/* A/B/C kutular */}
        <View style={{ flexDirection: "row", gap: 12, marginTop: 14 }}>
          {q.options.map((opt, i) => {
            const active = selected === i;
            return (
              <Pressable
                key={i}
                onPress={() => choose(i)}
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  borderRadius: 16,
                  paddingVertical: 16,
                  borderWidth: 2,
                  borderColor: active ? "#1565C0" : "#E6EEF8",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "900", fontSize: 18, color: "#102A43" }}>{letters[i]}</Text>
              </Pressable>
            );
          })}
        </View>

        {/* seçenek metinleri */}
        <View style={{ marginTop: 14 }}>
          {q.options.map((opt, i) => (
            <Text key={i} style={{ marginTop: 6, color: "#486581", fontWeight: "700" }}>
              {letters[i]}) {opt}
            </Text>
          ))}
        </View>
      </View>

      {/* alt sabit buton */}
      <View style={{ marginTop: "auto", padding: 16 }}>
        <Pressable
          onPress={next}
          style={{
            backgroundColor: selected === null ? "#9BB7DD" : "#1E6F2F",
            borderRadius: 14,
            paddingVertical: 14,
          }}
        >
          <Text style={{ color: "white", fontWeight: "900", textAlign: "center" }}>
            Sonraki Soru
          </Text>
        </Pressable>
      </View>
    </View>
  );
}