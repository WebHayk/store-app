import {FC, memo} from "react";
import {CategoryProductsModel} from "../../../core/models/interfaces";
import ArrayListProvider from "../../../hoc/ArrayListProvider";
import ProductsByCategoryItem from "./ProductsByCategoryItem";
import {useNavigation} from "@react-navigation/native";
import {SCREEN_NAMES} from "../../../core/models/enums";

interface ProductsByCategoryListModel {
    data: CategoryProductsModel[] | null
}

export const ProductsByCategoryList: FC<ProductsByCategoryListModel> = memo((
    {
        data
    }
) => {

    const navigation = useNavigation();

    return (
        <ArrayListProvider
            array={data}
            emptyLabel={"Empty products"}
        >
            {
                data?.map((productsByCategory, index) => {
                    let {category} = productsByCategory;

                    const isShowDivider = index + 1 !== data?.length;

                    const handleSeeAllPrice = () => {
                        // @ts-ignore
                        navigation.navigate(SCREEN_NAMES.CATEGORY_PRODUCTS, {category});
                    }

                    return (
                        <ProductsByCategoryItem
                            key={category}
                            onPress={handleSeeAllPrice}
                            isShowDivider={isShowDivider}
                            productsByCategory={productsByCategory}
                        />
                    )
                })
            }
        </ArrayListProvider>
    )
});

ProductsByCategoryList.displayName = "ProductsByCategoryList";
