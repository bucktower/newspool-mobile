import React, { Component } from 'react';
import {
  Linking,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles.js'

export default class Story extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.toTheLink(this.props.diveUrl)}
       style={styles.container}>
        <View style={styles.line1}>
          <Text style={styles.diveTitle}>
            {this.props.diveTitle}
          </Text>
          <Text style={styles.diveTime}>
            {this.props.diveTime}
          </Text>
        </View>
        <View style={styles.line1}>
          <Text style={styles.subMeta}>
            {this.props.poolTitle}
          </Text>
          <Text style={styles.subMeta}>
            {this.props.diveDisplayUrl}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  toTheLink(url) {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        alert('Invalid URL: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }
}
