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

const Newspool = StackNavigator({
  Home: { screen: Nexus },
  PoolBrowser: { screen: PoolBrowser },
});

AppRegistry.registerComponent('Newspool', () => Newspool);
