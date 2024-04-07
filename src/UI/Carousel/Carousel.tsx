import React, {memo, useRef, useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from "react-native-paper";

const { width } = Dimensions.get('window');

interface CustomCarouselProps {
    images: any[]
}

const CustomCarousel: React.FC<CustomCarouselProps> = memo(({ images }) => {

    const {colors} = useTheme();

    const scrollViewRef = useRef<ScrollView>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleScroll = (event: any) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setActiveIndex(currentIndex);
    };

    const renderIndicators = () => {
        return images.map((image, index) => (
            <View
                key={index}
                style={[
                    styles.indicator,
                    { backgroundColor: index === activeIndex ? colors.secondary : colors.background },
                ]}
            />
        ));
    };

    return (
        <View>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={image}
                        style={styles.image}
                        resizeMode="cover"
                    />
                ))}
            </ScrollView>
            <View
                style={styles.indicatorContainer}
            >
                {renderIndicators()}
            </View>
        </View>
    );
});

CustomCarousel.displayName = "CustomCarousel";

const styles = StyleSheet.create({
    image: {
        width: width - 37,
        height: 215,
        borderRadius: 10,
        marginRight: 5
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 5,
    },
});

export default CustomCarousel;
