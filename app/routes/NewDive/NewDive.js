import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
  TextInput,
} from 'react-native';
// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// Custom components
import Story from '../../components/Story/Story'
// StyleSheet
import styles from './styles.js'

export default class NewDive extends Component {
  constructor(props) {
    super(props);
    this.state = {hline: ''}, {subttl: ''}, {diveurl: ''};
  }
  static navigationOptions = {
    title: 'Compose',
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
        <View style={styles.editor}>
          <TextInput
            style={styles.diveTitle}
            placeholder="Headline"
            onChangeText={(hline) => this.setState({hline})}
          />
          <TextInput
            multiline={true}
            style={styles.subTitle}
            placeholder="Subtitle"
            onChangeText={(subttl) => this.setState({subttl})}
          />
          <TextInput
            style={styles.subMeta}
            placeholder="URL to link"
            onChangeText={(diveurl) => this.setState({diveurl})}
          />
        </View>
        <Text style={styles.previewText}>
          Preview
        </Text>
        <Story
          diveTitle={this.state.hline}
          diveSubTitle={this.state.subttl}
          diveTime='Now'
          diveUrl={this.state.diveurl}
        />
        <TouchableOpacity style={styles.searchPoolButton}
         onPress={() => alert('Pool Creation')}>
          <Text style={styles.searchPoolButtonText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
