import {FC} from "react";
import {Text} from "react-native-paper";
import {Image, StyleSheet, View} from "react-native";

export const LoginHeader: FC = () => {
    return (
        <View style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: 24
        }}>
            <Text
                style={styles.title}
                variant={"headlineMedium"}
            >
                LOG IN
            </Text>
            <Image
                source={require('../../../assets/images/logo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 24
    }
})
