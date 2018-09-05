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

  loadS: {
    marginTop: 45,
    margin: 5,
    width: 30,
    height: 30,
  },
  loadM: {
    marginTop: 35,
    margin: 5,
    width: 40,
    height: 40,
  },
  loadL: {
    margin: 5,
    marginTop: 25,
    width: 50,
    height: 50,
  },

  loadContainer: {
    display: 'flex',
    margin: 'auto',
    flexWrap: 'wrap',
    flexDirection: 'row',
    position: 'relative',
    marginTop: 30,
  },

  loadingText: {
    marginTop: 60,
    color: '#0082B5',
    fontWeight: 'bold',
  },
});

export default styles;
