import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Image } from 'react-native';
import shortid from 'shortid';

import styles from './styles';

const Carousel = props => {
  const { images } = props;

  return (
    <View>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {images.map(image => (
          <Image key={shortid.generate()} style={styles.image} source={{ uri: image }} />
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
