import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Image } from 'react-native';

import styles from './styles';

const Carousel = props => {
  const { images } = props;

  return (
    <View style={styles.scrollContainer}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {images.map(image => (
          <Image key={Date.now()} style={styles.image} source={{ uri: image }} />
        ))}
      </ScrollView>
    </View>
  );
};

Carousel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  images: PropTypes.array.isRequired,
};

export default Carousel;
