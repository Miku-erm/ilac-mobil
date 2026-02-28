import React, { useMemo, useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { STEPS } from "../data/steps";
import GreenModal from "../components/GreenModal";

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function StepOrderScreen() {
  const [started, setStarted] = useState(false);
  const [pool, setPool] = useState(() => shuffle(STEPS));
  const [chosen, setChosen] = useState([]);
  const [wrongModal, setWrongModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const remaining = useMemo(
    () => pool.filter((p) => !chosen.find((c) => c.id === p.id)),
    [pool, chosen]
  );

  const reset = () => {
    setPool(shuffle(STEPS));
    setChosen([]);
    setStarted(true);
  };

  const pick = (step) => {
    if (!started) return;

    const expected = chosen.length + 1;
    if (step.correctOrder !== expected) {
      setWrongModal(true);
      return;
    }

    const next = [...chosen, step];
    setChosen(next);

    if (next.length === STEPS.length) {
      setSuccessModal(true);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F3F7FC", padding: 12 }}>
      <GreenModal
        visible={!started}
        title="Uyarı!"
        message={"Anneler süspansiyon ilaç hazırlama\nbasamaklarını işlem sırasına göre\nsıralayınız.\nLütfen dikkatli olunuz !!!"}
        buttonText="Başla"
        onClose={() => setStarted(true)}
      />

      <GreenModal
        visible={wrongModal}
        title="Uyarı!"
        message={"Yanlış tercih yaptınız ve sağlıksız bir ilaç hazırladınız.\nLütfen daha dikkatli olunuz."}
        buttonText="Tamam"
        onClose={() => setWrongModal(false)}
      />

      <GreenModal
        visible={successModal}
        title="Uyarı!"
        message={"Tüm adımları doğru yaparak ilacı hazırladınız.\nTebrik ederiz"}
        buttonText="Tamam"
        onClose={() => setSuccessModal(false)}
      />

      <Text style={{ fontWeight: "900", color: "#102A43", marginBottom: 10 }}>
        Aşağıda verilen adımlar için doğru tercih yapınız.
      </Text>

      {/* seçilen doğru adımlar */}
      {chosen.map((s) => (
        <View key={s.id} style={{ backgroundColor: "#43C464", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12, marginBottom: 8 }}>
          <Text style={{ color: "white", fontWeight: "900", textAlign: "center" }}>{s.text}</Text>
        </View>
      ))}

      <Text style={{ fontWeight: "900", color: "#102A43", marginTop: 6, marginBottom: 8 }}>
        Adımlar (dokun)
      </Text>

      <FlatList
        data={remaining}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => pick(item)}
            style={{
              backgroundColor: "#D32F2F",
              borderRadius: 10,
              paddingVertical: 12,
              paddingHorizontal: 12,
              marginBottom: 8,
              opacity: started ? 1 : 0.5,
            }}
          >
            <Text style={{ color: "white", fontWeight: "900", textAlign: "center" }}>{item.text}</Text>
          </Pressable>
        )}
      />

      <View style={{ flexDirection: "row", gap: 10 }}>
        <Pressable onPress={reset} style={{ flex: 1, padding: 12, borderRadius: 12, backgroundColor: "#1565C0" }}>
          <Text style={{ color: "white", fontWeight: "900", textAlign: "center" }}>Sıfırla</Text>
        </Pressable>
        <Pressable onPress={() => { setChosen([]); setPool(shuffle(STEPS)); }} style={{ flex: 1, padding: 12, borderRadius: 12, borderWidth: 2, borderColor: "#1565C0" }}>
          <Text style={{ color: "#1565C0", fontWeight: "900", textAlign: "center" }}>Yenile</Text>
        </Pressable>
      </View>
    </View>
  );
}