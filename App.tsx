import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Button, ButtonText } from "./components/button";
import { Input } from "./components/input";

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1558981420-87aa9210d992?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1558980664-2506fca6bfc2?auto=format&fit=crop&w=600&q=80",
];

export default function App() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [showGallery, setShowGallery] = useState(false);

  const handleShowAlert = () => {
    Alert.alert("Primakara Luar Biasa", "Tugas Mandiri: Pemrograman Mobile");
  };

  const handleLoadPhotos = async () => {
    setShowGallery((prev) => !prev);
    !showGallery &&
      ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsMultipleSelection: true,
        selectionLimit: 10,
      })
        .then((res) => {
          const uris = res.assets?.map((asset) => asset.uri) ?? [];
          setPhotos(uris.length > 0 ? uris : FALLBACK_IMAGES);
        })
        .catch(() => setPhotos(FALLBACK_IMAGES));
  };

  const displayedPhotos = photos.length > 0 ? photos : FALLBACK_IMAGES;

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
        <StatusBar style="dark" />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Tugas Mandiri</Text>
            <Text style={styles.subtitle}>
              Modul I: Basic Component, Layouting &amp; Styling
            </Text>
          </View>

          <View style={styles.cardList}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Alert Primakara</Text>
              <Text style={styles.cardDescription} numberOfLines={1}>
                Menampilkan dialog alert native bertuliskan &quot;Primakara Luar Biasa&quot; menggunakan component Alert.
              </Text>
              <Button onPress={handleShowAlert} hostProps={{ style: styles.fullWidth }}>
                <ButtonText>Tampilkan Alert</ButtonText>
              </Button>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Galeri Motor Modif</Text>
              <Text style={styles.cardDescription} numberOfLines={1}>
                Menampilkan 10 gambar modifikasi motor dalam tata letak Flexbox Grid 2-kolom.
              </Text>

              <Input
                placeholder="Cari model motor modif..."
                hostProps={{ style: styles.inputHost }}
              />

              <Button onPress={handleLoadPhotos} hostProps={{ style: styles.fullWidth }}>
                <ButtonText>
                  {showGallery ? "Sembunyikan Galeri" : "Tampilkan Galeri Motor Modif"}
                </ButtonText>
              </Button>

              {showGallery && (
                <View style={styles.gridContainer}>
                  {displayedPhotos.map((uri, index) => (
                    <View key={`${uri}-${index}`} style={styles.gridItem}>
                      <Image
                        source={{ uri }}
                        style={styles.image}
                        resizeMode="cover"
                      />
                      <View style={styles.imageInfo}>
                        <Text style={styles.imageName} numberOfLines={1}>
                          Motor Modif {index + 1}
                        </Text>
                        <Text style={styles.imageBadge}>
                          {index + 1}/10
                        </Text>
                      </View>
                    </View>
                  ))}
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
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },
  gridItem: {
    width: "48%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dee2e6",
    backgroundColor: "#f8f9fa",
    overflow: "hidden",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 120,
  },
  imageInfo: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageName: {
    fontSize: 11,
    fontWeight: "600",
    color: "#212529",
    flex: 1,
    marginRight: 4,
  },
  imageBadge: {
    fontSize: 11,
    color: "#6c757d",
    fontWeight: "500",
  },
});
