import React from 'react';
import { View, FlatList, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';

import getNews from './app/helpers';

import Articles from './app/components/Articles';
import Carousel from './app/components/Carousel';

import styles from './App.styles';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      refreshing: true,
      isLoading: true,
      images: [],
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    getNews()
      .then(articles =>
        this.setState({
          articles,
          refreshing: false,
          isLoading: false,
          images: articles.slice(0, 3).map(({ enclosures }) => enclosures[0].url),
        })
      )
      .catch(() => this.setState({ refreshing: false }));
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
      },
      () => this.fetchNews()
    );
  };

  render() {
    const { articles, refreshing, isLoading, images } = this.state;
    const { mainViewStyle, activityIndicatorStyle } = styles;

    return (
      <View style={mainViewStyle}>
        {isLoading ? (
          <View style={activityIndicatorStyle}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={this.handleRefresh} />
            }
          >
            <Carousel images={images} />
            <FlatList
              data={articles}
              renderItem={({ item }) => <Articles article={item} />}
              keyExtractor={item => item.links[0].url}
            />
          </ScrollView>
        )}
      </View>
    );
  }
}
