import React from "react";
import RowTitle from "../RowTitle";
import { FlatList } from "react-native";
import { CardProduct } from "./CardProduct";
import { PopularProductsTypes } from "@/types/PopularProductsTypes";
import { PopularProducts } from "@/data/PopularProducts";


export default function PopularItems() {
    if(!PopularProducts || PopularProducts.length === 0) return null;

    const renderItem = ({ item }: { item: PopularProductsTypes }) => (
        <CardProduct  key={item.name} name={item.name} image={item.image} description={item.description} price={item.price} favorite={item.favorite}/>
    );

    return (
        <React.Fragment>
            <RowTitle title={"Popular"} textOption="See all" withOption={true} />

            <FlatList
                renderItem={renderItem}
                data={PopularProducts}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </React.Fragment>
    );
}