import {FC} from "react";
import ArrayListProvider from "../../../hoc/ArrayListProvider";
import CategoryItem from "./CategoryItem";
import {useNavigation} from "@react-navigation/native";
import {SCREEN_NAMES} from "../../../core/models/enums";

interface CategoriesListModel {
    categories: string[] | null
}

export const CategoriesList: FC<CategoriesListModel> = (
    {
        categories
    }
) => {

    const {navigate} = useNavigation();

    return (
        <ArrayListProvider
            array={categories}
            emptyLabel={"Empty categories"}
        >
            {
                categories?.map(category => {

                    // @ts-ignore
                    const handleRedirect = () => navigate(SCREEN_NAMES.CATEGORY_PRODUCTS, {category});

                    return (
                        <CategoryItem
                            onPress={handleRedirect}
                            key={category}
                            category={category}
                        />
                    )
                })
            }
        </ArrayListProvider>
    )
};
