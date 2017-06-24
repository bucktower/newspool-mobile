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

export default class Nexus extends Component {
  static navigationOptions = {
    title: 'Dives',
    header: null,
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
          <TouchableOpacity onPress={() => navigate('PoolBrowser')}>
            <View style={styles.actionButton}>
              <Icon name='pool' size={35} color='#333333' style={{
                backgroundColor: 'transparent',
              }} />
            </View>
          </TouchableOpacity>
          <Text style={styles.logoText}>
            Newspool
          </Text>
          <TouchableOpacity onPress={() => navigate('NewDive')}>
            <View style={styles.actionButton}>
              <Icon name='bell-plus' size={35} color='#333333' style={{
                backgroundColor: 'transparent',
              }} />
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          data={[{key: 0,
                  diveTitle: 'The Last Jedi Scheduled for Nov 21',
                  diveSubTitle: 'The subtitle would go here for more explanation blah blah blah blah djfksdfjsl',
                  diveTime: '12:01pm',
                  poolTitle: 'pool/starwarsfans',
                  diveUrl: 'http://www.radiotimes.com/news/2017-06-06/star-wars-the-last-jedi-will-be-released-a-day-early-in-the-uk',
                  diveDisplayUrl: 'radiotimes.com'},
                 {key: 1,
                  diveTitle: 'Hillary Upset by Trump',
                  diveSubTitle: 'The subtitle would go h blah blah blah djfksdfjsl',
                  diveTime: 'Yesterday',
                  poolTitle: 'pool/imwithher',
                  diveUrl: 'http://nymag.com/daily/intelligencer/2017/06/where-would-we-be-politically-if-hillary-clinton-had-won.html',
                  diveDisplayUrl: 'nymag.com'}
                ]}
          renderItem={({item}) => <Story
                                    key = {item.key}
                                    diveTitle={item.diveTitle}
                                    diveSubTitle={item.diveSubTitle}
                                    diveTime={item.diveTime}
                                    poolTitle={item.poolTitle}
                                    diveUrl={item.diveUrl}
                                    diveDisplayUrl={item.diveDisplayUrl}
                                  />}
        />
      </View>
    );
  }
}
