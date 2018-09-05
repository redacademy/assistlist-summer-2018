import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

class Splash extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.spring(this.state.opacity, {
      toValue: 1,
      duration: 500,
      show: true,
    }).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.9, 1],
                }),
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

export default Splash;
