import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/tabs/(stack)/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-2"
          variant="text-only"
          color="secondary"
          onPress={() => router.push("/tabs/(stack)/profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          className="mb-2"
          variant="text-only"
          color="tertiary"
          onPress={() => router.push("/tabs/(stack)/settings")}
        >
          Ajustes
        </CustomButton>

        <Link className="mb-2" href="/tabs/(stack)/products" asChild>
          <CustomButton variant="text-only" color="primary">
            Productos
          </CustomButton>
        </Link>
        {/* <Link className="mb-5" href="/products">
          Productos{" "}
        </Link>
        <Link className="mb-5" href="/profile">
          Perfil{" "}
        </Link>
        <Link className="mb-5" href="/settings">
          Ajustes{" "}
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
