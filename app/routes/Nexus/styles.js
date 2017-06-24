import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  titleBar: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  logoText: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'Monoton-Regular'
  },
  actionButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
