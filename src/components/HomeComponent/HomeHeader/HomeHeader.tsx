import {FC} from "react";
import {Appbar} from "react-native-paper";
import {SCREEN_NAMES} from "../../../core/models/enums";
import {Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const HomeHeader: FC = () => {

    const navigation = useNavigation();

    const handleSearchPress = () => {
        // @ts-ignore
        navigation.navigate(SCREEN_NAMES.PRODUCTS_FILTER);
    }

    return (
        <Appbar.Header style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Image
                style={{
                    marginLeft: 12,
                    objectFit: "contain",
                    width: 43,
                    height: 26
                }}
                source={require("../../../assets/images/logo.png")}
            />
            <Appbar.Action
                icon="magnify"
                onPress={handleSearchPress}
            />
        </Appbar.Header>
    )
}
