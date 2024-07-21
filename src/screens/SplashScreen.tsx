import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { SplashScreenNavigationProp } from "../types/navigation";

type Props = {
  navigation: SplashScreenNavigationProp;
};

export default function SplashScreen({ navigation }: Readonly<Props>) {
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.logo, { opacity: logoOpacity }]}>
        Travel App
      </Animated.Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("List")}
      >
        <Text style={styles.buttonText}>Mulai Jelajah</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  logo: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
