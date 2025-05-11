import React from "react";
import RowTitle from "../RowTitle";
import { CategoryType } from "@/types/CategoryType";
import { CardCategory } from "./CardCategory";
import { FlatList } from "react-native";
import { Categories } from "@/data/Categories";


export default function CategoryListHorizontal() {
    if(!Categories || Categories.length === 0) return null;

    const renderItem = ({ item }: { item: CategoryType }) => (
        <CardCategory withBackground={item.image ? true : false} key={item.name} category={item.name} image={item.image ? item.image : undefined}/>
    );

    return (
        <React.Fragment>
            <RowTitle title={"Categories"} textOption="See all" withOption={true} />

            <FlatList
                renderItem={renderItem}
                data={Categories}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </React.Fragment>
    );
}