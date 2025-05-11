import { ImageBackground, type ImageSourcePropType, View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

type Props = {
    category: string;
    withBackground?: boolean;
    image?: ImageSourcePropType
}

export function CardCategory({ category, withBackground, image }: Props) {
    const RenderComponent = withBackground ? ImageBackground : View;
    const borderColor = useThemeColor({light: Colors.light.borderGray, dark: Colors.dark.borderGray}, 'borderGray');

    return (
        <RenderComponent style={[styles.container, {borderColor: borderColor, backgroundColor: borderColor}]} source={withBackground ? image : undefined} resizeMode="cover" borderRadius={10}>
            <ThemedText type="defaultSemiBold" style={{color: '#FFF'}}>
                {category}
            </ThemedText>
        </RenderComponent>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        marginRight: 8,
        width: 130,
        height: 60,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: 'center'
    }
});