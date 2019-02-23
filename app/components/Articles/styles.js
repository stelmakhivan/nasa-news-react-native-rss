import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
  },
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10,
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
  },
  descriptionStyle: {
    marginBottom: 10,
  },
  dividerStyle: {
    backgroundColor: '#dfe6e9',
  },
  textStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
