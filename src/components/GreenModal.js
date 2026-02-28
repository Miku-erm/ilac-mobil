import React from "react";
import { Modal, View, Text, Pressable } from "react-native";

export default function GreenModal({ visible, title = "Uyarı!", message, buttonText = "Tamam", onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.35)", alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: "85%", backgroundColor: "#3CC56A", borderRadius: 18, padding: 16 }}>
          <Text style={{ fontSize: 22, fontWeight: "900", color: "#0B2E13", textAlign: "center" }}>{title}</Text>
          <Text style={{ marginTop: 10, color: "#0B2E13", textAlign: "center", lineHeight: 20 }}>
            {message}
          </Text>

          <Pressable
            onPress={onClose}
            style={{ marginTop: 14, backgroundColor: "#1E6F2F", paddingVertical: 12, borderRadius: 14 }}
          >
            <Text style={{ color: "white", fontWeight: "900", textAlign: "center" }}>{buttonText}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}