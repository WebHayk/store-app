import {FC, memo, useEffect} from "react";
import CustomCarousel from "../../UI/Carousel/Carousel";
import MainLayout from "../../layouts/MainLayout";
import {useAppDispatch} from "../../core/hooks/ReduxToolkit";
import {ProductsController} from "../../core/controllers/ProductsController";
import {useProductsSelector} from "../../core/store/selectors";
import ProductsByCategoryList from "./ProductsByCategoryList";
import {ScrollView, StyleSheet, View} from "react-native";

const bannerImages = [
    require("../../assets/images/banners/banner1.jpg"),
    require("../../assets/images/banners/banner2.jpg"),
    require("../../assets/images/banners/banner3.jpg")
];

export const HomeComponent: FC = memo(() => {

    const {
        categories,
        productsByCategory
    } = useProductsSelector();
    const dispatch = useAppDispatch();

    const getCategories = async () => {
        const {onCategoriesGet} = new ProductsController(dispatch);
        await onCategoriesGet();
    }

    const getProducts = async () => {
        const {onProductsByCategoryGet} = new ProductsController(dispatch);
        if (!categories) return;
        await onProductsByCategoryGet(categories, 4);
    }

    useEffect(() => {
        getProducts();
    }, [categories]);

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <MainLayout>
            <ScrollView>
                <CustomCarousel
                    images={bannerImages}
                />
                <View style={styles.content}>
                    <ProductsByCategoryList
                        data={productsByCategory}
                    />
                </View>
            </ScrollView>
        </MainLayout>
    )
});

HomeComponent.displayName = "HomeComponent";

const styles = StyleSheet.create({
    content: {
        width: "100%",
        marginTop: 24
    }
});
