import { Link, Redirect } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

const App = () => {
  //return <Redirect href="/(stack)/home" />;
  return <Redirect href="/home" />;
  /*  return (
    <SafeAreaView>
      <View className="mt-5 mx-2.5">
        <Text className="text-5xl" style={{ fontFamily: "WorkSans-Black" }}>
          Hola Mundo
        </Text>
        <Text className="text-4xl font-work-black text-primary">
          Hola Mundo
        </Text>
        <Text className="text-3xl font-work-medium text-secondary">
          Hola Mundo
        </Text>
        <Text className="text-2xl font-work-light text-secondary-100">
          Hola Mundo
        </Text>
        <Text className="text-x text-tertiary">Hola Mundo</Text>

        <Link href="/products">Productos</Link>
      </View>
    </SafeAreaView>
  ); */
};

export default App;
