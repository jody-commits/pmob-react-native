import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Button, ButtonText } from "./components/button";
import { Input } from "./components/input";

type RootTabParamList = {
  Home: { paramText?: string } | undefined;
  Explore: undefined;
};

type HomeScreenProps = {
  navigation: BottomTabNavigationProp<RootTabParamList, "Home">;
  route: RouteProp<RootTabParamList, "Home">;
};

type ExploreScreenProps = {
  navigation: BottomTabNavigationProp<RootTabParamList, "Explore">;
  route: RouteProp<RootTabParamList, "Explore">;
};

function HomeScreen({ navigation, route }: HomeScreenProps) {
  const receivedParam = route.params?.paramText;

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Halaman Beranda</Text>
          <Text style={styles.subtitle}>React Navigation: Bottom Tab Navigator</Text>
        </View>

        <View style={styles.cardList}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Status Navigasi</Text>
            <Text style={styles.cardDescription} numberOfLines={1}>
              Halaman ini berada di dalam komponen createBottomTabNavigator resmi.
            </Text>

            <View style={styles.displayBox}>
              <Text style={styles.displayLabel}>Parameter yang Diterima:</Text>
              <Text style={styles.displayTitle}>{receivedParam ? receivedParam : "Belum ada parameter yang dikirim"}</Text>
              <Text style={styles.displayDesc}>
                {receivedParam ? "Parameter berhasil ditransfer dari layar Explore via React Navigation." : "Silakan buka tab Explore untuk memasukkan dan mengirim parameter."}
              </Text>
            </View>

            <Button onPress={() => navigation.navigate("Explore")} hostProps={{ style: styles.fullWidth }}>
              <ButtonText>Buka Layar Tugas Mandiri</ButtonText>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ExploreScreen({ navigation }: ExploreScreenProps) {
  const [inputText, setInputText] = useState("");
  const [lastAction, setLastAction] = useState("");

  const handleNavigateWithParam = () => {
    const textToSend = inputText.trim() ? inputText.trim() : "Mahasiswa Primakara";
    setLastAction(`Parameter dikirim: "${textToSend}"`);
    navigation.navigate("Home", { paramText: textToSend });
  };

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Tugas Mandiri</Text>
          <Text style={styles.subtitle}>Modul IV: Screen Navigation with React Navigation</Text>
        </View>

        <View style={styles.cardList}>
          {/* Card 1: Tab Navigation */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Tab Navigation</Text>
            <Text style={styles.cardDescription} numberOfLines={1}>
              Navigasi tab native menggunakan createBottomTabNavigator.
            </Text>

            <View style={styles.displayBox}>
              <Text style={styles.displayLabel}>Tab Bar Aktif:</Text>
              <Text style={styles.displayTitle}>Layar Explore</Text>
              <Text style={styles.displayDesc}>Perpindahan halaman dikelola oleh createBottomTabNavigator</Text>
            </View>

            <Button onPress={() => navigation.navigate("Home")} hostProps={{ style: styles.fullWidth }}>
              <ButtonText>Pindah ke Tab Home via navigate</ButtonText>
            </Button>
          </View>

          {/* Card 2: Stack & Parameter Navigation */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Stack &amp; Parameter Navigation</Text>
            <Text style={styles.cardDescription} numberOfLines={1}>
              Pengiriman parameter rute dan fungsi navigasi menggunakan API React Navigation.
            </Text>

            <Input placeholder="Ketik parameter teks (cth: Jodi)..." onChangeText={setInputText} hostProps={{ style: styles.inputHost }} />

            <Button onPress={handleNavigateWithParam} hostProps={{ style: styles.fullWidth }}>
              <ButtonText>Kirim Parameter ke Tab Home</ButtonText>
            </Button>

            <Button onPress={() => navigation.goBack()} hostProps={{ style: styles.fullWidth }}>
              <ButtonText>Kembali via goBack</ButtonText>
            </Button>

            {Boolean(lastAction) && (
              <View style={styles.displayBox}>
                <Text style={styles.displayLabel}>Aksi Navigasi Terakhir:</Text>
                <Text style={styles.displayTitle}>{lastAction}</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#0d6efd",
            tabBarInactiveTintColor: "#6c757d",
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "600",
            },
            tabBarItemStyle: {
              justifyContent: "center",
              alignItems: "center",
            },
            tabBarLabelPosition: "below-icon",
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home",
              tabBarIcon: () => null,
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              title: "Explore",
              tabBarIcon: () => null,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
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
  displayBox: {
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dee2e6",
    backgroundColor: "#f8f9fa",
    gap: 4,
  },
  displayLabel: {
    fontSize: 12,
    color: "#6c757d",
    fontWeight: "500",
  },
  displayTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212529",
  },
  displayDesc: {
    fontSize: 13,
    color: "#495057",
  },
  inputHost: {
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ced4da",
    backgroundColor: "#ffffff",
  },
});
