import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  MapScreenRouteProp,
  MapScreenNavigationProp,
} from "../types/navigation";
import { Header } from "../components/Header";

type Props = {
  route: MapScreenRouteProp;
  navigation: MapScreenNavigationProp;
};

export default function MapScreen({ route, navigation }: Readonly<Props>) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Header
        title={`Lokasi ${item.title}`}
        onBack={() => navigation.goBack()}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: item.location.latitude,
          longitude: item.location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: item.location.latitude,
            longitude: item.location.longitude,
          }}
          title={item.title}
          description={item.description}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
