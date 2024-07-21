import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Splash: undefined;
  List: undefined;
  Detail: { item: TravelItem };
  Map: { item: TravelItem };
  Booking: { item: TravelItem };
};

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;
export type ListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "List"
>;
export type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Detail"
>;
export type MapScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Map"
>;
export type BookingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Booking"
>;

export type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;
export type MapScreenRouteProp = RouteProp<RootStackParamList, "Map">;
export type BookingScreenRouteProp = RouteProp<RootStackParamList, "Booking">;

export interface TravelItem {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: {
    latitude: number;
    longitude: number;
  };
}
