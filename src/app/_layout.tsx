import { Text, View } from "react-native";

console.log("ROOT LAYOUT CONSOLE TEST");

export default function RootLayout() {
  console.log("ROOT LAYOUT RENDER");

  return (
    <View style={{ flex: 1 }}>
      <Text>Architecture Lab - DevTools Test</Text>
    </View>
  );
}

// import {
//   DarkTheme,
//   DefaultTheme,
//   Redirect,
//   Slot,
//   ThemeProvider,
//   useSegments,
// } from "expo-router";

// import { useAuthStore } from "@/stores/auth.store";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";
// import { useColorScheme } from "react-native";

// import { AnimatedSplashOverlay } from "@/components/animated-icon";
// // import { useAuthStore } from '@/stores/auth.store';

// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const segments = useSegments();

//   const { user } = useAuthStore();

//   const isLoading = false;
//   const initializeAuth = () => {};

//   useEffect(() => {
//     initializeAuth();
//   }, [initializeAuth]);

//   if (isLoading) {
//     return <AnimatedSplashOverlay />;
//   }

//   const inAuthGroup = segments[0] === "(auth)";

//   console.log("this console test ");

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       {!user && !inAuthGroup ? (
//         <Redirect href="/(auth)/login" />
//       ) : user && inAuthGroup ? (
//         <Redirect href="/(tabs)" />
//       ) : (
//         <>
//           <AnimatedSplashOverlay />
//           <Slot />
//         </>
//       )}
//     </ThemeProvider>
//   );
// }
