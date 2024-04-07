import {FC, memo, useEffect, useMemo} from "react";
import {useProductsSelector} from "../../core/store/selectors";
import {useAppDispatch} from "../../core/hooks/ReduxToolkit";
import {ProductsController} from "../../core/controllers/ProductsController";
import MainLayout from "../../layouts/MainLayout";
import {ScrollView, StyleSheet, View} from "react-native";
import ProductsListComponent from "../ProductsListComponent";
import {useTheme} from "react-native-paper";

export const WishlistComponent: FC = memo(() => {

    const {colors} = useTheme();

    const {
        wishlist,
        filteredProducts
    } = useProductsSelector();

    const dispatch = useAppDispatch();

    const wishedListProducts = useMemo(() => {
        if (!filteredProducts) return null;
        if (!wishlist) return [];
        return filteredProducts.products.filter(product => {
            let {id} = product;
            return wishlist.includes(id);
        });
    }, [wishlist, filteredProducts]);

    const getProducts = async () => {
        let {onProductsGet} = new ProductsController(dispatch);
        await onProductsGet();
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <MainLayout
            background={colors.scrim}
        >
            <ScrollView>
                <View style={styles.list}>
                    <ProductsListComponent
                        emptyLabel={"Empty wishlist"}
                        products={wishedListProducts}
                    />
                </View>
            </ScrollView>
        </MainLayout>
    )
});

WishlistComponent.displayName = "WishlistComponent";

const styles = StyleSheet.create({
    list: {
        marginVertical: 24,
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})
