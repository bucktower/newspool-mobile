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
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="blue"
           barStyle="light-content"
         />
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => alert('Hello')}>
            <View style={styles.actionButton}>
              <Icon name='pool' size={35} color='#333333' style={{
                backgroundColor: 'transparent',
              }} />
            </View>
          </TouchableOpacity>
          <Text style={styles.logoText}>
            Newspool
          </Text>
          <TouchableOpacity onPress={() => alert('Button Pressed!')}>
            <View style={styles.actionButton}>
              <Icon name='bell-plus' size={35} color='#333333' style={{
                backgroundColor: 'transparent',
              }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
