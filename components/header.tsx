import { router } from "expo-router";
import { Blocks, ChevronLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export function Header() {
  return (
    <View className="bg-purple-500 h-[12%] justify-end items-center p-4">  
        <View className="flex-row items-center gap-4">
          <Blocks color="white" />
          <Text className="text-white text-xl font-bold">DESAPEGUITOS</Text>
        </View>
    </View>
  );
}
