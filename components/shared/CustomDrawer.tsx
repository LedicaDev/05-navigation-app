import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text } from "react-native";

const CustomDrawer = (Props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...Props} scrollEnabled={false}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] ronded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-work-black text-3xl">LD</Text>
        </View>
      </View>

      {/* DrawerItems */}

      <DrawerItemList {...Props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
