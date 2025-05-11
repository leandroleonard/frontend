import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";

type ButtonIconProps = {
    lightColor?: string;
    darkColor?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    iconName: keyof typeof Ionicons.glyphMap;
};

export function ButtonIcon({ iconName, lightColor, darkColor, size = "sm" }: ButtonIconProps) {
    const sizeMap = {
        xs: 14,
        sm: 18,
        md: 24,
        lg: 32,
    };

    const sizeNumber = sizeMap[size] ?? 16;
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'icon')

    return (
        <Pressable>
            <Ionicons name={iconName} size={sizeNumber} color={color} />
        </Pressable>
    );
}
