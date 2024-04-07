import {FC, memo, useEffect} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import MainLayout from "../../layouts/MainLayout";
import CategoriesList from "./CategoriesList";
import {useAppDispatch} from "../../core/hooks/ReduxToolkit";
import {ProductsController} from "../../core/controllers/ProductsController";
import {useProductsSelector} from "../../core/store/selectors";
import {useTheme} from "react-native-paper";

export const CategoriesComponent: FC = memo(() => {

    const {colors} = useTheme();
    const dispatch = useAppDispatch();
    const {categories} = useProductsSelector();

    const getCategories = async () => {
        const {onCategoriesGet} = new ProductsController(dispatch);
        await onCategoriesGet();
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <MainLayout background={colors.scrim}>
            <ScrollView>
                <View style={styles.container}>
                    <CategoriesList
                        categories={categories}
                    />
                </View>
            </ScrollView>
        </MainLayout>
    )
});

CategoriesComponent.displayName = "CategoriesComponent";

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        paddingBottom: 24,
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    }
})
