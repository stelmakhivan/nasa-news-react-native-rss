import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.5;

const styles = StyleSheet.create({
  image: {
    width,
    height,
  },
});

export default styles;
