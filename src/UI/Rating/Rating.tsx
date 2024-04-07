import {FC} from "react";
import {StyleSheet, View} from "react-native";
import {StarIcon} from "../../assets/icons/StarIcon";
import {Text} from "react-native-paper";

interface RatingModel {
    rating: number
}

export const Rating: FC<RatingModel> = (
    {
        rating
    }
) => {
    return (
        <View style={styles.container}>
            <StarIcon/>
            <Text style={styles.ratingValue}>
                {rating}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
    },
    ratingValue: {
        marginLeft: 3
    }
});
