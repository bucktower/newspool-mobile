import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    paddingLeft: 0,
    marginTop: 0,
  },
  logoText: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'Monoton-Regular'
  },
  actionButton: {
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  newPoolButton: {
    flexDirection: 'row',
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  newPoolButtonText: {
    fontFamily: 'Shrikhand-Regular',
    fontSize: 24,
    color: '#333333',
  },
  searchPoolButton: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  searchPoolButtonText: {
    fontFamily: 'Shrikhand-Regular',
    fontSize: 24,
    color: '#ebebeb',
  },
});
