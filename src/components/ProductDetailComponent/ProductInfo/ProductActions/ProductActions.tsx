import {FC} from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text, useTheme} from "react-native-paper";

interface ProductActionsModel {
    price: number
}

export const ProductActions: FC<ProductActionsModel> = (
    {
        price
    }
) => {

    const {colors} = useTheme();

    return (
        <View style={{
            ...styles.container,
            backgroundColor: colors.background,
            borderTopWidth: 0.5,
            borderTopColor: colors.outline
        }}>
            <View>
                <Text variant={"bodySmall"}>
                    Total
                </Text>
                <Text style={styles.productPrice} variant={"titleLarge"}>
                    {price}$
                </Text>
            </View>
            <Button
                uppercase
                mode={"contained"}
            >
                Add to cart
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        right: 16,
        left: 16,
        paddingVertical: 12,
        width: "100%",
        position: "absolute",
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    productPrice: {
        marginTop: 5,
        fontWeight: "600"
    }
});
