import React from 'react';
import PropTypes from 'prop-types';

import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';

import moment from 'moment';

import styles from './styles';

const Articles = props => {
  const { article } = props;
  const { title, description, published, enclosures, links } = article;
  const {
    noteStyle,
    featuredTitleStyle,
    cardStyle,
    descriptionStyle,
    dividerStyle,
    timeStyle,
  } = styles;
  const time = moment(published || moment.now()).fromNow();

  return (
    <TouchableNativeFeedback useForeground onPress={() => Linking.openURL(links[0].url)}>
      <Card
        style={cardStyle}
        featuredTitle={title}
        featuredTitleStyle={featuredTitleStyle}
        image={{
          uri: enclosures[0].url,
        }}
      >
        <Text style={descriptionStyle}>{description || 'Read More...'}</Text>
        <Divider style={dividerStyle} />
        <View style={timeStyle}>
          <Text style={noteStyle}>{time}</Text>
        </View>
      </Card>
    </TouchableNativeFeedback>
  );
};

Articles.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
};

export default Articles;
