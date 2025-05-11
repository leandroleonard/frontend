import { forwardRef, useState } from "react";
import { TextInput, TextInputProps, StyleSheet, View, Text, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColor } from "@/hooks/useThemeColor";

type InputSearchProps = TextInputProps & {
    placeholder?: string;
};

const InputSearch = forwardRef<TextInput, InputSearchProps>(({ placeholder, style, ...props }, ref) => {
    const colorIcon = useThemeColor({light: Colors.light.placeholderText, dark: Colors.dark.placeholderText}, 'text');
    const backgroundColor = useThemeColor({light: Colors.light.background, dark: Colors.dark.background}, 'background');
    const borderColor = useThemeColor({light: Colors.light.placeholderText, dark: Colors.dark.placeholderText}, 'placeholderText');

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    ref={ref}
                    style={[
                        styles.input,
                        style,
                        {backgroundColor: backgroundColor, borderColor: borderColor, color: borderColor}
                    ]}
                    placeholderTextColor={borderColor}
                    {...props}
                    placeholder={placeholder}
                />

                <Pressable style={styles.icon} onPress={() => { }}>
                    <Ionicons
                        name={"search-outline"}
                        size={22}
                        color={colorIcon}
                    />
                </Pressable>
            </View>
        </View>
    );
});

export default InputSearch;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        paddingLeft: 46,
        paddingRight: 16,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 14,
        fontFamily: 'NunitoSans',
        height: 45,
    },
    inputFocused: {
        borderColor: "#A9A9A9",
    },
    icon: {
        position: 'absolute',
        left: 15,
    },
});
