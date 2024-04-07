import {FC} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {Text} from "react-native-paper";

interface CategoryItemModel {
    category: string,
    onPress: () => void
}

export const CategoryItem: FC<CategoryItemModel> = (
    {
        category,
        onPress
    }
) => {

    const categoryName = category
        .replaceAll("-", " ")
        .toUpperCase();

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text
                    variant={"bodyMedium"}
                    style={styles.categoryName}
                >
                    {categoryName}
                </Text>
                <Image
                    style={styles.categoryImage}
                    source={getCategoryImage(category)}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        borderRadius: 10,
        marginTop: 16,
        position: "relative"
    },
    categoryImage: {
        borderRadius: 10,
        overflow: "hidden"
    },
    categoryName: {
        fontWeight: "bold",
        zIndex: 50,
        position: "absolute",
        bottom: 20,
        left: 20,
        color: "#fff"
    }
})

const getCategoryImage = (category: string) => {
    switch (category) {
        case "automotive":
            return require("../../../../assets/images/categories/automotive.jpg");
        case "fragrances":
            return require("../../../../assets/images/categories/fragrances.jpg");
        case "furniture":
            return require("../../../../assets/images/categories/furniture.jpg");
        case "groceries":
            return require("../../../../assets/images/categories/groceries.jpg");
        case "home-decoration":
            return require("../../../../assets/images/categories/home-decoration.jpg");
        case "laptops":
            return require("../../../../assets/images/categories/laptops.jpg");
        case "lighting":
            return require("../../../../assets/images/categories/lighting.jpg");
        case "mens-shirts":
            return require("../../../../assets/images/categories/mens-shirts.jpg");
        case "mens-shoes":
            return require("../../../../assets/images/categories/mens-shoes.jpg");
        case "mens-watches":
            return require("../../../../assets/images/categories/mens-watches.jpg");
        case "motorcycle":
            return require("../../../../assets/images/categories/motorcycle.jpg");
        case "skincare":
            return require("../../../../assets/images/categories/skincare.jpg");
        case "smartphones":
            return require("../../../../assets/images/categories/smartphones.jpg");
        case "sunglasses":
            return require("../../../../assets/images/categories/sunglasses.jpg");
        case "tops":
            return require("../../../../assets/images/categories/tops.jpg");
        case "womens-bags":
            return require("../../../../assets/images/categories/womens-bags.jpg");
        case "womens-dresses":
            return require("../../../../assets/images/categories/womens-dresses.jpg");
        case "womens-jewellery":
            return require("../../../../assets/images/categories/womens-jewellery.jpg");
        case "womens-shoes":
            return require("../../../../assets/images/categories/womens-shoes.jpg");
        case "womens-watches":
            return require("../../../../assets/images/categories/womens-watches.jpg");
    }
}
