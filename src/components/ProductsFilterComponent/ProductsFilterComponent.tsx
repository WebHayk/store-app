import {FC, memo, useEffect, useState} from "react";
import {ProductsController} from "../../core/controllers/ProductsController";
import {useAppDispatch} from "../../core/hooks/ReduxToolkit";
import {useProductsSelector} from "../../core/store/selectors";
import ProductsListComponent from "../ProductsListComponent";
import MainLayout from "../../layouts/MainLayout";
import {ScrollView, View} from "react-native";
import {useTheme} from "react-native-paper";

export const ProductsFilterComponent: FC = memo(() => {

    const {colors} = useTheme();

    const {filters, filteredProducts} = useProductsSelector();
    const dispatch = useAppDispatch();

    const [isLoading, setLoading] = useState<boolean>(false);

    const getProducts = async () => {
        let {onProductsGet} = new ProductsController(dispatch);
        setLoading(true);
        await onProductsGet(filters.query || "");
        setLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, [filters.query]);

    return (
        <MainLayout background={colors.scrim}>
            <ScrollView nestedScrollEnabled>
                <View style={{
                    paddingVertical: 24
                }}>
                    <ProductsListComponent
                        products={isLoading ? null : filteredProducts?.products || null}
                    />
                </View>
            </ScrollView>
        </MainLayout>
    )
});

ProductsFilterComponent.displayName = "ProductsFilterComponent";
