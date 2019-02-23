import * as rssParser from 'react-native-rss-parser';

import NASA_URI from '../config/constants';

export default async function getNews() {
  // eslint-disable-next-line no-undef
  const result = await fetch(NASA_URI)
    .then(response => response.text())
    .then(responseData => rssParser.parse(responseData));
  return result.items;
}
