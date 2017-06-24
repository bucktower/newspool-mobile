import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  line1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editor: {
    backgroundColor: '#efefef',
    paddingRight: 10,
    paddingLeft: 10,
  },
  diveTitle: {
    fontFamily: 'Shrikhand-Regular',
    fontSize: 24,
    color: '#333333',
    height: 48,
    marginBottom: 10,
  },
  diveTime: {
    fontFamily: 'Lato-Black',
    fontSize: 10,
    color: '#333333',
    height: 40,
  },
  subTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: '#333333',
    paddingRight: 5,
    height: 72,
  },
  subMeta: {
    fontFamily: 'Lato-Light',
    fontSize: 18,
    color: '#333333',
    height: 40,
  },
  preview: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  previewText: {
    marginTop: 10,
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
