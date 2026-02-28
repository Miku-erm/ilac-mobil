import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Modal } from "react-native";

function Accordion({ title, color, open, onToggle, items }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Pressable onPress={onToggle} style={{ backgroundColor: color, padding: 14, borderRadius: 14 }}>
        <Text style={{ fontWeight: "900", color: "#102A43" }}>{title}</Text>
      </Pressable>

      {open ? (
        <View style={{ marginTop: 10, gap: 10 }}>
          {items.map((it) => (
            <Pressable
              key={it.label}
              onPress={it.onPress}
              style={{ backgroundColor: "#D7F0FF", padding: 12, borderRadius: 14 }}
            >
              <Text style={{ fontWeight: "800", color: "#102A43" }}>↳ {it.label}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F3F7FC" }} contentContainerStyle={{ padding: 16 }}>
      {/* üst satır */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <Pressable onPress={() => setMenuOpen(true)} style={{ padding: 6 }}>
          <Text style={{ fontSize: 22, fontWeight: "900" }}>☰</Text>
        </Pressable>
        <Text style={{ fontWeight: "900", color: "#102A43" }}>kubra</Text>
      </View>

      {/* modal sidebar */}
      <Modal visible={menuOpen} transparent animationType="fade">
        <Pressable onPress={() => setMenuOpen(false)} style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.35)" }}>
          <View style={{ width: 270, backgroundColor: "white", height: "100%", padding: 14 }}>
            <View style={{ backgroundColor: "#1565C0", padding: 14, borderRadius: 12, marginBottom: 10 }}>
              <Text style={{ color: "white", fontWeight: "900", fontSize: 16 }}>kubra</Text>
              <Text style={{ color: "white", opacity: 0.9, marginTop: 4 }}>kubra@example.com</Text>
            </View>

            {[
              ["Arama", "Search"],
              ["Sorular", "FAQ"],
              ["Sıralama Soruları", "StepOrder"],
              ["Quiz", "Quiz"],
              ["Hatırlatıcı", "Reminders"],
              ["Profil", "Profile"],
              ["Hakkında", "About"],
            ].map(([t, r]) => (
              <Pressable
                key={t}
                onPress={() => {
                  setMenuOpen(false);
                  navigation.navigate(r);
                }}
                style={{ paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#EEF2F7" }}
              >
                <Text style={{ fontWeight: "800", color: "#102A43" }}>{t}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>

      <Accordion
        title="📌 İLAÇ HAKKINDA GENEL BİLGİLER"
        color="#FFE082"
        open={open1}
        onToggle={() => setOpen1((v) => !v)}
        items={[
          { label: "Bilgi Kartları", onPress: () => navigation.navigate("ContentList") },
          { label: "Sorular", onPress: () => navigation.navigate("FAQ") },
        ]}
      />

      <Accordion
        title="🧪 AKILCI İLAÇ KULLANIMI İŞLEMLERİ"
        color="#4DD0E1"
        open={open2}
        onToggle={() => setOpen2((v) => !v)}
        items={[
          { label: "Kontrol Listesi", onPress: () => navigation.navigate("Checklist") },
          { label: "Arama", onPress: () => navigation.navigate("Search") },
          { label: "Sıralama Soruları", onPress: () => navigation.navigate("StepOrder") },
          { label: "Sorular (Quiz)", onPress: () => navigation.navigate("Quiz") },
          { label: "Hatırlatıcı", onPress: () => navigation.navigate("Reminders") },
        ]}
      />

      <Pressable onPress={() => navigation.navigate("Profile")} style={{ backgroundColor: "#F48FB1", padding: 14, borderRadius: 14, marginBottom: 12 }}>
        <Text style={{ fontWeight: "900", color: "#102A43" }}>👤 PROFİL</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("About")} style={{ backgroundColor: "#B39DDB", padding: 14, borderRadius: 14 }}>
        <Text style={{ fontWeight: "900", color: "#102A43" }}>ℹ️ HAKKINDA</Text>
      </Pressable>
    </ScrollView>
  );
}