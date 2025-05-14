import { ImageSourcePropType } from "react-native";

export type PopularProductsTypes = {
    name: string;
    description: string;
    price: string;
    image?: ImageSourcePropType,
    favorite?: boolean
}