import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ListScreenNavigationProp, TravelItem } from "../types/navigation";
import { Header } from "../components/Header";
import { TravelCard } from "../components/TravelCard";
import { useSafeAreaInsets } from "../hooks/useSafeAreaInsets";

type Props = {
  navigation: ListScreenNavigationProp;
};

const data: TravelItem[] = [
  {
    id: "1",
    title: "Pantai Kuta",
    description:
      "Pantai indah di Bali dengan pasir putih dan ombak yang cocok untuk berselancar.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 50,
    location: { latitude: -8.7184, longitude: 115.1686 },
  },
  {
    id: "2",
    title: "Candi Borobudur",
    description:
      "Candi Buddha terbesar di dunia yang dibangun pada abad ke-8 dan ke-9 Masehi.",
    image:
      "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 25,
    location: { latitude: -7.6079, longitude: 110.2038 },
  },
  {
    id: "3",
    title: "Gunung Bromo",
    description:
      "Gunung berapi aktif yang terkenal dengan pemandangan matahari terbitnya yang menakjubkan.",
    image:
      "https://plus.unsplash.com/premium_photo-1674832821919-3715ea87ae7e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 40,
    location: { latitude: -7.9424, longitude: 112.953 },
  },
];

export default function ListScreen({ navigation }: Readonly<Props>) {
  const insets = useSafeAreaInsets();

  const renderItem = ({ item }: { item: TravelItem }) => (
    <TravelCard
      item={item}
      onPress={() => navigation.navigate("Detail", { item })}
    />
  );

  return (
    <View style={styles.container}>
      <Header title="Destinasi Wisata" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          { paddingBottom: insets.bottom },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  listContent: {
    padding: 16,
  },
});
