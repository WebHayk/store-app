import {FC, useMemo} from "react";
import {Appbar, useTheme} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {useProductsSelector} from "../../../core/store/selectors";
import HeartFilledIcon from "../../../assets/icons/HeartFilledIcon";
import HeartOutlinedIcon from "../../../assets/icons/HeartOutlinedIcon";
import {useAppDispatch} from "../../../core/hooks/ReduxToolkit";
import {ProductsController} from "../../../core/controllers/ProductsController";

interface ProductDetailHeaderModel {
    productId: number
}

export const ProductDetailHeader: FC<ProductDetailHeaderModel> = (
    {
        productId
    }
) => {

    const {colors} = useTheme();
    const dispatch = useAppDispatch();
    const {wishlist} = useProductsSelector();

    const navigation = useNavigation();

    const isWished = useMemo(() => {
        if (!wishlist) return false;
        return wishlist.includes(productId);
    }, [wishlist]);

    const handleWishPress = () => {
        let {onProductWished} = new ProductsController(dispatch);
        onProductWished(productId, wishlist || []);
    }

    const handleBack = () => navigation.goBack();

    return (
        <Appbar.Header style={{
            width: "100%",
            backgroundColor: colors.background,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Appbar.BackAction
                onPress={handleBack}
            />
            <Appbar.Action
                icon={() => {
                    if (isWished) return <HeartFilledIcon/>
                    return <HeartOutlinedIcon/>
                }}
                onPress={handleWishPress}
            />
        </Appbar.Header>
    )
}
