import { useSafeAreaInsets as useRNSafeAreaInsets } from "react-native-safe-area-context";

export const useSafeAreaInsets = () => {
  const insets = useRNSafeAreaInsets();
  return {
    ...insets,
    top: Math.max(insets.top, 20), // Ensure minimum top inset for devices without notch
  };
};
