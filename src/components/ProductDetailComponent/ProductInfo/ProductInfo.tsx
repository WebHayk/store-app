import {FC, useMemo} from "react";
import {StyleSheet, View} from "react-native";
import CustomCarousel from "../../../UI/Carousel/Carousel";
import {ProductModel} from "../../../core/models/interfaces/response";
import {Divider, Text, useTheme} from "react-native-paper";
import Rating from "../../../UI/Rating";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import ProductActions from "./ProductActions";
import {Helpers} from "../../../core/helpers";

interface ProductInfoModel {
    product: ProductModel
}

export const ProductInfo: FC<ProductInfoModel> = (
    {
        product
    }
) => {

    const {colors} = useTheme();

    const {
        images,
        title,
        discountPercentage,
        price,
        rating,
        id,
        brand,
        category,
        description
    } = product;

    const currentPrice = Helpers.calculatePercentage(
        product.price,
        product.discountPercentage
    );

    const uriSources = useMemo(() => {
        return images.map(image => {
            return {
                uri: image
            }
        });
    }, [images]);

    return (
        <View>
            <CustomCarousel
                images={uriSources}
            />
            <View style={styles.productInfoContent}>
                <Text
                    style={styles.title}
                    variant={"titleLarge"}
                >
                    {title.toUpperCase()}
                </Text>
                <View
                    style={styles.row}
                >
                    <Text
                        style={{
                            ...styles.oldPrice,
                            ...styles.lightLabel,
                            color: colors.error
                        }}
                        variant={"bodyMedium"}
                    >
                        {price}$
                    </Text>
                    <Text
                        style={styles.discountedPrice}
                        variant={"bodyLarge"}
                    >
                        {currentPrice}$
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text
                        style={styles.rowLabel}
                        variant={"bodyLarge"}
                    >
                        Rating
                    </Text>
                    <Rating
                        rating={rating}
                    />
                </View>
                <View style={styles.row}>
                    <Text
                        style={styles.rowLabel}
                        variant={"bodyLarge"}
                    >
                        ID
                    </Text>
                    <Text
                        style={styles.lightLabel}
                        variant={"bodyLarge"}
                    >
                        {id}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text
                        style={styles.rowLabel}
                        variant={"bodyLarge"}
                    >
                        Brand
                    </Text>
                    <Text
                        style={styles.lightLabel}
                        variant={"bodyLarge"}
                    >
                        {brand}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text
                        style={styles.rowLabel}
                        variant={"bodyLarge"}
                    >
                        Category
                    </Text>
                    <Text
                        style={styles.lightLabel}
                        variant={"bodyLarge"}
                    >
                        {category}
                    </Text>
                </View>
                <Divider
                    style={{
                        ...styles.divider,
                        backgroundColor: colors.outline
                    }}
                />
                <Text style={{
                    color: colors.tertiary,
                    ...styles.lightLabel
                }}>
                    {description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productInfoContent: {
        marginTop: 24,
    },
    title: {
        fontWeight: "600"
    },
    discountedPrice: {
        marginLeft: 10,
        fontWeight: "600"
    },
    oldPrice: {
        textDecorationLine: "line-through"
    },
    row: {
        marginTop: 5,
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
    },
    rowLabel: {
        marginRight: 10
    },
    divider: {
        marginVertical: 16
    },
    lightLabel: {
        fontWeight: "300"
    }
});
