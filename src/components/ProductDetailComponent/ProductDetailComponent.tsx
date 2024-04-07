import {FC, memo, useEffect} from "react";
import {ProductsController} from "../../core/controllers/ProductsController";
import {useAppDispatch} from "../../core/hooks/ReduxToolkit";
import {ScrollView, StyleSheet} from "react-native";
import CustomCarousel from "../../UI/Carousel/Carousel";
import {useProductsSelector} from "../../core/store/selectors";
import {ActivityIndicator, Text, useTheme} from "react-native-paper";
import MainLayout from "../../layouts/MainLayout";
import {setProduct} from "../../core/store/reducers/ProductsReducer";
import ProductInfo from "./ProductInfo";
import ProductActions from "./ProductInfo/ProductActions";
import {Helpers} from "../../core/helpers";

interface ProductDetailComponentModel {
    productId: number
}

export const ProductDetailComponent: FC<ProductDetailComponentModel> = memo((
    {
        productId
    }
) => {

    const {colors} = useTheme();
    const {product} = useProductsSelector();
    const dispatch = useAppDispatch();

    const getProductDetail = async () => {
        let {onProductGet} = new ProductsController(dispatch);
        await onProductGet(productId);
    }

    useEffect(() => {
        getProductDetail();
        return () => {
            dispatch(setProduct(null));
        }
    }, [productId]);

    return (
        <MainLayout>
            <ScrollView style={styles.container}>
                {
                    product
                        ?
                        <ProductInfo
                            product={product}
                        />
                        :
                        <ActivityIndicator
                            animating={true}
                            color={colors.primary}
                        />
                }
            </ScrollView>
            {
                product
                &&
                <ProductActions
                    price={Helpers.calculatePercentage(
                        product.price,
                        product.discountPercentage
                    )}
                />
            }
        </MainLayout>
    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

ProductDetailComponent.displayName = "ProductDetailComponent";
