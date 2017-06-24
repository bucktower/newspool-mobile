import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
  AppRegistry,
} from 'react-native';
// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// Navigation
import { StackNavigator } from 'react-navigation';
// Screens/Routes
import Nexus from './routes/Nexus/Nexus.js'
import PoolBrowser from './routes/PoolBrowser/PoolBrowser.js'
import NewDive from './routes/NewDive/NewDive.js'

const Newspool = StackNavigator({
  Dives: { screen: Nexus },
  PoolBrowser: { screen: PoolBrowser },
  NewDive: { screen: NewDive },
});

AppRegistry.registerComponent('Newspool', () => Newspool);
