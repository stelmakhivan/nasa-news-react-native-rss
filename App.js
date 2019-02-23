import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import getNews from './app/helpers';

import Articles from './app/components/Articles';

import styles from './App.styles';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      refreshing: true,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false, isLoading: false }))
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
    const { articles, refreshing, isLoading } = this.state;
    const { mainViewStyle, activityIndicatorStyle } = styles;
    return (
      <View style={mainViewStyle}>
        {isLoading ? (
          <View style={activityIndicatorStyle}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <FlatList
            data={articles}
            renderItem={({ item }) => <Articles article={item} />}
            keyExtractor={item => item.links[0].url}
            refreshing={refreshing}
            onRefresh={this.handleRefresh}
          />
        )}
      </View>
    );
  }
}
