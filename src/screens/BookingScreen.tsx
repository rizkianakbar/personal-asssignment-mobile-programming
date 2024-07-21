import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  BookingScreenRouteProp,
  BookingScreenNavigationProp,
} from "../types/navigation";
import { Header } from "../components/Header";
import { useSafeAreaInsets } from "../hooks/useSafeAreaInsets";

type Props = {
  route: BookingScreenRouteProp;
  navigation: BookingScreenNavigationProp;
};

export default function BookingScreen({ route, navigation }: Readonly<Props>) {
  const { item } = route.params;
  const insets = useSafeAreaInsets();
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleBooking = () => {
    if (!date || !guests) {
      Alert.alert("Error", "Mohon isi semua field");
      return;
    }
    Alert.alert(
      "Pemesanan Berhasil",
      `Anda telah memesan ${item.title} untuk ${guests} orang pada tanggal ${date}`,
      [{ text: "OK", onPress: () => navigation.navigate("List") }]
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Pemesanan" onBack={() => navigation.goBack()} />
      <View style={[styles.content, { paddingBottom: insets.bottom }]}>
        <Text style={styles.label}>Tanggal Kunjungan:</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder="DD/MM/YYYY"
        />
        <Text style={styles.label}>Jumlah Pengunjung:</Text>
        <TextInput
          style={styles.input}
          value={guests}
          onChangeText={setGuests}
          placeholder="Masukkan jumlah pengunjung"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleBooking}>
          <Text style={styles.buttonText}>Pesan Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
