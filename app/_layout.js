import { Stack } from "expo-router";
import { View, Image } from "react-native";
import logo from "../assets/routiva_logo.png";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#448aee" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerRight: () => <Image className="h-12 w-40" source={logo} />,
        }}
      />
    </View>
  );
}
