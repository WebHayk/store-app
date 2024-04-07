import {FC} from "react";
import {ProductModel} from "../../core/models/interfaces/response";
import ArrayListProvider from "../../hoc/ArrayListProvider";
import ProductCard from "./ProductCard";
import {FlatList} from "react-native";
import {useProductsSelector} from "../../core/store/selectors";
import {ProductsController} from "../../core/controllers/ProductsController";
import {useAppDispatch} from "../../core/hooks/ReduxToolkit";
import {useNavigation} from "@react-navigation/native";
import {SCREEN_NAMES} from "../../core/models/enums";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import {setProduct} from "../../core/store/reducers/ProductsReducer";

interface ProductsListComponentModel {
    products: ProductModel[] | null,
    numColumns?: number,
    initialStyles?: StyleProp<ViewStyle>,
    emptyLabel?: string
}

export const ProductsListComponent: FC<ProductsListComponentModel> = (
    {
        products,
        numColumns = 2,
        initialStyles,
        emptyLabel
    }
) => {

    const {navigate} = useNavigation();
    const dispatch = useAppDispatch();
    const {wishlist} = useProductsSelector();

    return (
        <ArrayListProvider
            array={products}
            emptyLabel={emptyLabel || "Empty products"}
        >
            <FlatList
                nestedScrollEnabled
                style={initialStyles}
                disableVirtualization={true}
                data={products}
                renderItem={({item}) => {

                    let {id} = item;

                    const isWished = wishlist?.includes(id);

                    const handleWishPress = () => {
                        let {onProductWished} = new ProductsController(dispatch);
                        onProductWished(
                            id,
                            wishlist || []
                        );
                    }

                    const handleProductPress = () => {
                        dispatch(setProduct(null));
                        // @ts-ignore
                        navigate(SCREEN_NAMES.PRODUCTS_DETAIL, { productId: id });
                    }

                    return (
                        <ProductCard
                            onProductPress={handleProductPress}
                            onWishPress={handleWishPress}
                            isWished={!!isWished}
                            key={item.id}
                            product={item}
                        />
                    )
                }}
                numColumns={numColumns}
            />
        </ArrayListProvider>
    )
}
