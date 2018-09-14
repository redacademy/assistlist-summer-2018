import React, { Component } from 'react';
import { View, Text, Modal, Picker, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default class SelectInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      showPicker: false,
    };
  }
  renderPickerItems() {
    return this.props.data.map(item => {
      return (
        <Picker.Item
          label={item.label}
          value={item.value}
          key={item.key || item.label}
        />
      );
    });
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setState({ showPicker: !this.state.showPicker })}
        >
          <Text style={styles.input}>
            {this.state.value
              ? this.state.value.replace(/^\w/, c => c.toUpperCase())
              : ' '}
          </Text>
          {this.state.showPicker ? (
            <View style={styles.iconRight} />
          ) : (
            <View style={styles.iconPlay}>
              <Icon name="play" size={18} color={styles.iconPlay.color} />
            </View>
          )}
        </TouchableOpacity>
        <Modal
          visible={this.state.showPicker}
          transparent
          animationType="slide"
          supportedOrientations={['portrait', 'landscape']}
        >
          <TouchableOpacity
            style={styles.modalViewTop}
            onPress={() =>
              this.setState({ showPicker: !this.state.showPicker })
            }
          />
          <View style={styles.modalViewBottom}>
            <Picker
              selectedValue={this.state.value}
              onValueChange={(itemValue, itemIndex, item) =>
                this.setState({ value: itemValue })
              }
              placeholderStyle={{ color: 'white' }}
            >
              {this.renderPickerItems()}
            </Picker>
          </View>
        </Modal>
      </View>
    );
  }
}
