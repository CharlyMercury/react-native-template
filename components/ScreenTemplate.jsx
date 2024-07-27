import { View } from "react-native"; // min 1:17:53

export function ScreenTemplate({ children }) {
  return <View className="flex-1 bg-black pt-4 px-2">{children}</View>;
}
