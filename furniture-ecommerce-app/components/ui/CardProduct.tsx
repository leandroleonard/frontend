import { Image, type ImageSourcePropType, View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

type Props = {
    name: string;
    description: string;
    price: string;
    favorite?: boolean;
    image?: ImageSourcePropType
}

export function CardProduct({ name, description, price, favorite, image }: Props) {

    return (
        <View style={[styles.cardContainer, { width: 140 }]}>
            <View style={[styles.cardContainer, { width: '100%', height: 160 }]}>
                <Image source={image} style={styles.image} />
            </View>

            <View style={[styles.extraContainer, { width: 140, height: 40 }]}>
                <ThemedText style={styles.boldText}>
                    {description}
                </ThemedText>

                <ThemedText style={styles.boldText}>
                    {price}
                </ThemedText>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginRight: 14
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover'
    },
    normalText: {
        fontSize: 12,
        fontFamily: 'NunitoSans',
        fontWeight: 500,
        lineHeight: 16,
        color: '#202020'
    },
    boldText: {
        fontSize: 14,
        fontFamily: 'Raleway',
        fontWeight: 700,
        lineHeight: 21
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    extraContainer: {
        borderEndEndRadius: 10,
        borderRadius: 10,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 10,
    }
});