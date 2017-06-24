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
        </View>
        <View style={styles.line1}>
          <Text style={styles.subTitle}>
            {this.props.diveSubTitle}
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
            {this.extractRootDomain(this.props.diveUrl)}
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


  extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
  }

  extractRootDomain(url) {
    if (url == null) {
      return '';
    }
    var domain = this.extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;

    // extracting the root domain here
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
    }
    return domain;
  }
}
