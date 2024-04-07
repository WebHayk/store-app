import {FC} from "react";
import {Appbar} from "react-native-paper";
import HeartFilledIcon from "../../../assets/icons/HeartFilledIcon";
import HeartOutlinedIcon from "../../../assets/icons/HeartOutlinedIcon";
import {useNavigation} from "@react-navigation/native";
import App from "../../../../App";
import {SCREEN_NAMES} from "../../../core/models/enums";
import {StyleSheet} from "react-native";

interface CategoryProductsHeaderModel {
    category: string
}

export const CategoryProductsHeader: FC<CategoryProductsHeaderModel> = (
    {
        category
    }
) => {

    const navigation = useNavigation();

    const handleBack = () => navigation.goBack();

    const handleSearchPress = () => {
        // @ts-ignore
        navigation.navigate(SCREEN_NAMES.PRODUCTS_FILTER);
    }

    return (
        <Appbar.Header>
            <Appbar.BackAction
                onPress={handleBack}
            />
            <Appbar.Content
                style={styles.content}
                title={category.toUpperCase()}
            />
            <Appbar.Action
                icon="magnify"
                onPress={handleSearchPress}
            />
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

