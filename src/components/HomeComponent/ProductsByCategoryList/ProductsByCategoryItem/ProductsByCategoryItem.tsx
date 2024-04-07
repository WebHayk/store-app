import {FC} from "react";
import {CategoryProductsModel} from "../../../../core/models/interfaces";
import {StyleSheet, View} from "react-native";
import {Divider, Text, useTheme} from "react-native-paper";
import ProductsListComponent from "../../../ProductsListComponent";

interface ProductsByCategoryItemModel {
    productsByCategory: CategoryProductsModel,
    isShowDivider: boolean,
    onPress: () => void
}

export const ProductsByCategoryItem: FC<ProductsByCategoryItemModel> = (
    {
        productsByCategory,
        isShowDivider,
        onPress
    }
) => {

    const {colors} = useTheme();

    let {
        products,
        category
    } = productsByCategory;

    return (
        <View>
            <View style={styles.header}>
                <Text
                    style={styles.headerTitle}
                    variant={"bodyLarge"}
                >
                    {category.toUpperCase()}
                </Text>
                <Text
                    onPress={onPress}
                    style={{
                        color: colors.primary,
                        ...styles.headerMoreLabel
                    }}
                >
                    See all
                </Text>
            </View>
            <ProductsListComponent
                products={products}
            />
            {
                isShowDivider
                &&
                <Divider style={styles.divider}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerTitle: {
        fontWeight: "600"
    },
    headerMoreLabel: {
        textDecorationLine: "underline",
        textTransform: "uppercase",
        fontWeight: "700"
    },
    divider: {
        marginVertical: 24
    }
});
