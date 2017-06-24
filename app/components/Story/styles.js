import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  line1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  diveTitle: {
    fontFamily: 'Shrikhand-Regular',
    fontSize: 14,
    color: '#333333',
  },
  diveTime: {
    fontFamily: 'Lato-Black',
    fontSize: 10,
    color: '#333333',
  },
  subMeta: {
    fontFamily: 'Lato-Light',
    fontSize: 12,
    color: '#333333',
  },
});
