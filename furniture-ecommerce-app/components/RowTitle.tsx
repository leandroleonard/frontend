import { View, Pressable, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Props = {
    title: string;
    withOption?: boolean,
    textOption?: string;
    onPress?: () => void;
}

export default function RowTitle({ title, withOption = false, textOption, onPress = () => { } }: Props) {
    return (
        <View style={styles.rowTitle}>
            <ThemedText type='title'>
                {title}
            </ThemedText>


            {withOption && (
                <Pressable style={styles.rowTitle} onPress={onPress}>
                    <ThemedText type="defaultSemiBold" style={{marginRight: 8, color: Colors.light.main}}>
                        {textOption}
                    </ThemedText>

                    <Ionicons name="arrow-forward" size={16} color={Colors.light.main}/>
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    rowTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }
});