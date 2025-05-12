import { useThemeColor } from "@/hooks/useThemeColor";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function DefaultLayout() {
    const tabTintColor = useThemeColor({ light: Colors.light.tabIconSelected, dark: Colors.dark.tabIconSelected }, 'tint');
    const tabInactiveColor = useThemeColor({ light: Colors.light.tabIconDefault, dark: Colors.dark.tabIconDefault }, 'tint');
    const tabBackgroundColor = useThemeColor({ light: Colors.light.background, dark: Colors.dark.background }, 'background');

    const renderIcon = (name: string, focused: boolean) => (
        <View>
            <Ionicons
                name={name as any}
                size={24}
                color={focused ? Colors.light.tabIconSelected : Colors.light.tabIconDefault}
            />
        </View>
    );

    return (
        <React.Fragment>
            <StatusBar style="auto"/>

            <Tabs initialRouteName="index" screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: tabTintColor,
                tabBarInactiveTintColor: tabInactiveColor,
                tabBarStyle: {
                    backgroundColor: tabBackgroundColor,
                    borderTopWidth: 0,
                    borderBottomWidth: undefined
                },
                tabBarShowLabel: false,
            })}>

                <Tabs.Screen name="index" options={{
                    tabBarIcon: ({ focused }) =>
                        renderIcon(focused ? "home" : "home-outline", focused),
                }} />

                <Tabs.Screen name="messages" options={{
                    tabBarIcon: ({ focused }) =>
                        renderIcon(focused ? "mail" : "mail-outline", focused),
                }} />

                <Tabs.Screen name="shop" options={{
                    tabBarIcon: ({ focused }) =>
                        renderIcon(focused ? "bag" : "bag-outline", focused),
                }} />

                <Tabs.Screen name="favorite" options={{
                    tabBarIcon: ({ focused }) =>
                        renderIcon(focused ? "heart" : "heart-outline", focused),
                }} />

                <Tabs.Screen name="profile" options={{
                    tabBarIcon: ({ focused }) =>
                        renderIcon(focused ? "person" : "person-outline", focused),
                }} />


            </Tabs>
        </React.Fragment>
    );
}