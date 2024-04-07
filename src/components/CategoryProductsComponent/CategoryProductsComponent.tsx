import {FC, memo, useEffect} from "react";
import MainLayout from "../../layouts/MainLayout";
import {useTheme} from "react-native-paper";
import {useAppDispatch} from "../../core/hooks/ReduxToolkit";
import {ProductsController} from "../../core/controllers/ProductsController";
import {ScrollView, StyleSheet} from "react-native";
import ProductsListComponent from "../ProductsListComponent";
import {useProductsSelector} from "../../core/store/selectors";
import {setProductsByCategoryDetail} from "../../core/store/reducers/ProductsReducer";

interface CategoryProductsComponentModel {
    category: string
}

export const CategoryProductsComponent: FC<CategoryProductsComponentModel> = memo((
    {
        category
    }
) => {

    const {productsByCategoryDetail} = useProductsSelector();
    const dispatch = useAppDispatch();
    const {colors} = useTheme();

    const getProducts = async () => {
        let {onProductsByCategoryDetailGet} = new ProductsController(dispatch);
        await onProductsByCategoryDetailGet(category);
    }

    useEffect(() => {
        getProducts();
        return () => {
            dispatch(setProductsByCategoryDetail(null));
        }
    }, []);

    return (
        <MainLayout
            background={colors.scrim}
        >
            <ScrollView style={styles.container}>
                <ProductsListComponent
                    products={productsByCategoryDetail?.products || null}
                />
            </ScrollView>
        </MainLayout>
    )
});

const styles = StyleSheet.create({
    container: {
        marginVertical: 24
    }
})

CategoryProductsComponent.displayName = "CategoryProductsComponent";
