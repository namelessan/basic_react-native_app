/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  FlatList,
  Button,
  ScrollView,
  Dimensions,
} from 'react-native';
import movieInfo from './Info.json';

class Post extends Component {
  render() {
    return (
      <View style={post.layout}>
        <Text style={post.title}>{this.props.item.title}</Text>
        <Image style={post.poster} source={{ uri: this.props.item.image}}/>
        <TouchableOpacity style={post.button} onPress={() => Linking.openURL(this.props.item.url)}>
          <Text style={post.buttonText}>More info</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header1}>Basic React Native App</Text>
          <Text style={styles.header2}>Top 10 Movies of IMDB</Text>
          <FlatList
            data={movieInfo}
            renderItem={({ item, index }) => {
              console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
              return (
                <Post item={item}>
                </Post>
              );
            }}
            keyExtractor= {(item) => item.title}
          />
          <Text style={styles.footer}> Made by Pan - INTEK </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 30,
  },
  header1: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#33adff',
    color: 'white',
  },
  header2: {
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 5,
    color: '#111223'
  }
});

const post = StyleSheet.create ({
  layout: {
    margin: 5,
    marginBottom: 10,
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f7fbff',
    borderWidth: 0.5,
    borderColor: '#a5a5a5',
    borderRadius: 5,
  },
  title: {
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111223',
  },
  poster: {
    margin: 10,
    padding: 10,
    width: Dimensions.get('window').width-20,
    height: Dimensions.get('window').width+70,
    flex: 1,
    alignSelf: 'center',
    alignItems: 'stretch',
    borderRadius: 5,
  },
  button: {
    alignSelf: 'center',
    width: Dimensions.get('window').width-20,
    backgroundColor: '#33adff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#33adff',
  },
  buttonText: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});