import {FC} from "react";
import {Button, Divider, Text, useTheme} from "react-native-paper";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import ArrowIcon from "../../../assets/icons/ArrowIcon";

interface LogoutButtonModel {
    onLogout: () => void
}

export const LogoutButton: FC<LogoutButtonModel> = (
    {
        onLogout
    }
) => {

    const {colors} = useTheme();

    return (
        <View style={styles.container}>
            <Divider/>
            <TouchableOpacity
                onPress={onLogout}
            >
                <View style={styles.content}>
                    <View style={styles.row}>
                        <LogoutIcon/>
                        <Text
                            style={{
                                color: colors.secondary,
                                ...styles.label
                            }}
                        >
                            Log Out
                        </Text>
                    </View>
                    <ArrowIcon/>
                </View>
            </TouchableOpacity>
            <Divider/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 16,
        left: 16,
        right: 16
    },
    content: {
        flexDirection: "row",
        width: "100%",
        display: "flex",
        paddingVertical: 18,
        alignItems: "center",
        justifyContent: "space-between"
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    label: {
        marginLeft: 12
    }
});
