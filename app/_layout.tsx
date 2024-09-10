import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack
      //Essa parte é para a barra de navegação
      screenOptions={{
        headerStyle: {
          backgroundColor: "#010101",
          borderBottomWidth: 0, // Remove a borda
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", // Centraliza o título na barra de navegação
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* <Stack.Screen name="index" options={{ title: "Bem vindo ao museu" }} /> */}
      <Stack.Screen name="museu" options={{ title: "Museu" }} />




    </Stack>




  );
}
