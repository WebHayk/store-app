import {FC} from "react";
import {Appbar} from "react-native-paper";
import {SCREEN_NAMES} from "../../../core/models/enums";
import {StyleSheet} from "react-native";

export const ProfileHeader: FC = () => {
    return (
        <Appbar.Header>
            <Appbar.Content
                style={styles.title}
                titleStyle={{textAlign: "center"}}
                title={SCREEN_NAMES.PROFILE}
            />
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    title: {
        flex: 1
    }
})
