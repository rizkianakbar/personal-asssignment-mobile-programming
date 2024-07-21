import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  DetailScreenRouteProp,
  DetailScreenNavigationProp,
} from "../types/navigation";
import { Header } from "../components/Header";
import { useSafeAreaInsets } from "../hooks/useSafeAreaInsets";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

export default function DetailScreen({ route, navigation }: Readonly<Props>) {
  const { item } = route.params;
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Header title={item.title} onBack={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom },
        ]}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Map", { item })}
          >
            <Ionicons name="map-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Lihat Peta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Booking", { item })}
          >
            <Ionicons name="calendar-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Pesan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
