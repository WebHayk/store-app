import {FC} from "react";
import {Appbar} from "react-native-paper";
import {SCREEN_NAMES} from "../../../core/models/enums";
import {useNavigation} from "@react-navigation/native";
import {StyleSheet} from "react-native";

export const CategoriesHeader: FC = () => {

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
                title={SCREEN_NAMES.CATEGORIES}
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
