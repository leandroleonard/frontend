import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');
const PADDING = 5;

const slides = [
    {
        id: '1',
        title: 'High quality sofa started',
        subtitle: '70% off',
        image: require('@/assets/images/12630.jpg'),
    },
    {
        id: '2',
        title: 'Another promo',
        subtitle: 'Up to 50%',
        image: require('@/assets/images/480.jpg'),
    },
];

export default function BannerCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const CAROUSEL_WIDTH = width - PADDING * 2;


    return (
        <View>
            <Carousel
                width={CAROUSEL_WIDTH}
                height={180}
                data={slides}
                onSnapToItem={setActiveIndex}
                scrollAnimationDuration={800}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 1, // desativa o zoom
                    parallaxScrollingOffset: PADDING, // controla o espaço lateral
                    parallaxAdjacentItemScale: 1, // mantém os slides adjacentes no mesmo tamanho
                }}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <ImageBackground source={item.image} style={styles.image} imageStyle={styles.imageStyle}>
                            <View style={styles.overlay}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.subtitle}>{item.subtitle}</Text>
                                <Text style={styles.link}>See all items →</Text>
                            </View>
                        </ImageBackground>
                    </View>
                )}
            />
            <View style={styles.dotsContainer}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            index === activeIndex && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    slide: {
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 20
    },
    image: {
        width: '100%',
        height: 180,
        justifyContent: 'center',
    },
    imageStyle: {
        borderRadius: 10,
    },
    overlay: {
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.6)',
        width: '60%',
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        color: '#333',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    link: {
        marginTop: 8,
        fontSize: 14,
        color: '#555',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        marginBottom: 10
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#333',
    },
});
