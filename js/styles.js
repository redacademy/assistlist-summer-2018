import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  splashRoot: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  splashChild: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  mainLogo: {
    width: '100%',
    height: '100%',
    maxHeight: 155,
    maxWidth: 250,
  },
});

export default styles;
