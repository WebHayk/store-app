import {FC} from "react";
import {IconButton, Text, TouchableRipple} from "react-native-paper";
import {ProductModel} from "../../../core/models/interfaces/response";
import {Image, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {StarIcon} from "../../../assets/icons/StarIcon";
import HeartFilledIcon from "../../../assets/icons/HeartFilledIcon";
import HeartOutlinedIcon from "../../../assets/icons/HeartOutlinedIcon";
import {StyleSheet} from "react-native";
import Rating from "../../../UI/Rating";

interface ProductCardModel {
    product: ProductModel,
    isWished: boolean,
    onWishPress: () => void,
    onProductPress: () => void
}

export const  ProductCard: FC<ProductCardModel> = (
    {
        product,
        isWished,
        onWishPress,
        onProductPress
    }
) => {

    let {
        images,
        title,
        price,
        rating,
        thumbnail
    } = product;

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onProductPress}
        >
                {
                    !!images.length
                    &&
                    <View style={styles.cardImageContainer}>
                        <TouchableWithoutFeedback onPress={onWishPress}>
                            <View style={styles.cardWishedButton}>
                                {
                                    isWished
                                        ?
                                        <HeartFilledIcon />
                                        :
                                        <HeartOutlinedIcon />
                                }
                            </View>
                        </TouchableWithoutFeedback>
                        <Image
                            style={styles.cardImage}
                            height={164}
                            source={{
                                uri: thumbnail
                            }}
                        />
                    </View>
                }
                <View style={styles.cardContent}>
                    <Text
                        variant={"titleMedium"}
                    >
                        {title}
                    </Text>
                    <View style={styles.cardFooter}>
                        <Rating
                            rating={rating}
                        />
                        <Text variant={"titleMedium"}>
                            {price}$
                        </Text>
                    </View>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        position: "relative",
        shadowOpacity: 0,
        flex: 1,
        margin: 10
    },
    cardImageContainer: {
        position: "relative"
    },
    cardWishedButton: {
        position: "absolute",
        top: 10,
        right: 10
    },
    cardImage: {
        zIndex: -1,
        borderRadius: 10,
        objectFit: "cover"
    },
    cardContent: {
        marginTop: 10
    },
    cardFooter: {
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
