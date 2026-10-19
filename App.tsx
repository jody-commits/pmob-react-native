import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Button, ButtonText } from "./components/button";
import { Input } from "./components/input";

export default function App() {
  const [isShowingHello, setIsShowingHello] = useState(false);
  const [inputText, setInputText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleToggleHello = () => {
    setIsShowingHello((prev) => !prev);
  };

  const handleSubmitText = () => {
    setSubmittedText(inputText);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
        <StatusBar style="dark" />
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.title}>Tugas Mandiri</Text>
            <Text style={styles.subtitle}>Modul II: Props, State &amp; Methods</Text>
          </View>

          <View style={styles.cardList}>
            {/* Card 1: Toggle Hello World */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Toggle Hello World</Text>
              <Text style={styles.cardDescription} numberOfLines={1}>
                Menampilkan dan menyembunyikan teks Hello World menggunakan tombol dinamis.
              </Text>
              <Button onPress={handleToggleHello} hostProps={{ style: styles.fullWidth }}>
                <ButtonText>{isShowingHello ? "Sembunyikan" : "Tampilkan"}</ButtonText>
              </Button>
              {isShowingHello && (
                <View style={styles.displayBox}>
                  <Text style={styles.helloText}>Hello World</Text>
                </View>
              )}
            </View>

            {/* Card 2: Form Input Teks */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Form Input Teks</Text>
              <Text style={styles.cardDescription} numberOfLines={1}>
                Menampilkan teks hasil ketikan pengguna saat tombol submit ditekan.
              </Text>

              <Input placeholder="Ketik teks di sini..." onChangeText={setInputText} hostProps={{ style: styles.inputHost }} />

              <Button onPress={handleSubmitText} hostProps={{ style: styles.fullWidth }}>
                <ButtonText>Submit</ButtonText>
              </Button>

              {Boolean(submittedText) && (
                <View style={styles.resultBox}>
                  <Text style={styles.resultLabel}>Teks yang Diinput:</Text>
                  <Text style={styles.resultValue}>{submittedText}</Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: "#6c757d",
  },
  cardList: {
    gap: 16,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e9ecef",
    backgroundColor: "#ffffff",
    gap: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212529",
  },
  cardDescription: {
    fontSize: 13,
    color: "#6c757d",
  },
  fullWidth: {
    width: "100%",
  },
  inputHost: {
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ced4da",
    backgroundColor: "#ffffff",
  },
  displayBox: {
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dee2e6",
    backgroundColor: "#f8f9fa",
    alignItems: "center",
  },
  helloText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  resultBox: {
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dee2e6",
    backgroundColor: "#f8f9fa",
    gap: 4,
  },
  resultLabel: {
    fontSize: 13,
    color: "#6c757d",
  },
  resultValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
});
