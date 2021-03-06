import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// Custom components
import Story from '../../components/Story/Story'
// StyleSheet
import styles from './styles.js'

export default class PoolBrowser extends Component {
  static navigationOptions = {
    title: 'Pools',
    headerTintColor: '#ebebeb',
    headerStyle: {
        backgroundColor: '#333333',
        paddingTop: 25,
        paddingBottom: 10,
    },
    headerTitleStyle: {
        fontFamily: 'Monoton-Regular',
        fontSize: 30,
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <TouchableOpacity style={styles.newPoolButton}
         onPress={() => alert('Pool Creation')}>
          <Text style={styles.newPoolButtonText}>
            New Pool
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchPoolButton}
         onPress={() => alert('Pool Creation')}>
          <Text style={styles.searchPoolButtonText}>
            Search for Pool
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
