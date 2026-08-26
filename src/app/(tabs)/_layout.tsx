import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="plants"
        options={{
          title: "Plants",
          tabBarIcon: ({ color }) => <Ionicons name="leaf" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Ionicons name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
