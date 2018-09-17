import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import MobilitySub from '../MobilitySub';
import BathroomSafetySub from '../BathroomSafetySub/';
import LivingAidsSub from '../LivingAidsSub/';
import TransferAidsSub from '../TransferAidsSub/';
import BedroomSub from '../BedroomSub';
import styles from './styles';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      mobility: false,
      bathroom: false,
      living: false,
      transfer: false,
      bedroom: false,
    };
  }

  showOverlay() {
    this.setState({ modalVisible: true });
  }

  mobilityOverlay = () => {
    this.setState({ mobility: false });
  };

  bathroomOverlay = () => {
    this.setState({ bathroom: false });
  };

  livingOverlay = () => {
    this.setState({ living: false });
  };

  transferOverlay = () => {
    this.setState({ transfer: false });
  };

  bedroomOverlay = () => {
    this.setState({ bedroom: false });
  };
  render() {
    return (
      <View>
        <Image
          style={styles.searchIcon}
          source={require('../../assets/images/Icons/Search.png')}
        />
        <TextInput
          onTouchStart={this.showOverlay.bind(this)}
          style={styles.searchInput}
          onChangeText={text =>
            console.log(text) && !this.showOverlay.bind(this)
          }
          placeholder={'Enter a Keyword or Location'}
          placeholderTextColor="#0082B566"
        />
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          onBackdropPress={() =>
            this.setState({ modalVisible: !this.state.modalVisible })
          }
        >
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  mobility: !this.state.mobility,
                })
              }
              style={styles.option}
            >
              <Text style={styles.optionText}>Mobility</Text>
              <Image
                style={styles.arrow}
                source={require('../../assets/images/Icons/Rightarrow.png')}
              />
              {this.state.mobility && (
                <MobilitySub
                  modalVisible={this.state.modalVisible}
                  onBackdropPress={() =>
                    this.setState({ modalVisible: !this.state.modalVisible })
                  }
                  mobilityOverlay={this.mobilityOverlay}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  bathroom: !this.state.bathroom,
                })
              }
              style={styles.option}
            >
              <Text style={styles.optionText}>Bathroom Safety</Text>
              <Image
                style={styles.arrow}
                source={require('../../assets/images/Icons/Rightarrow.png')}
              />
              {this.state.bathroom && (
                <BathroomSafetySub
                  modalVisible={this.state.modalVisible}
                  onBackdropPress={() =>
                    this.setState({ modalVisible: !this.state.modalVisible })
                  }
                  bathroomOverlay={this.bathroomOverlay}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  living: !this.state.living,
                })
              }
              style={styles.option}
            >
              <Text style={styles.optionText}>Daily Living Aids</Text>
              <Image
                style={styles.arrow}
                source={require('../../assets/images/Icons/Rightarrow.png')}
              />
              {this.state.living && (
                <LivingAidsSub
                  modalVisible={this.state.modalVisible}
                  onBackdropPress={() =>
                    this.setState({ modalVisible: !this.state.modalVisible })
                  }
                  livingOverlay={this.livingOverlay}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  transfer: !this.state.transfer,
                })
              }
              style={styles.option}
            >
              <Text style={styles.optionText}>Transfer Aids</Text>
              <Image
                style={styles.arrow}
                source={require('../../assets/images/Icons/Rightarrow.png')}
              />
              {this.state.transfer && (
                <TransferAidsSub
                  modalVisible={this.state.modalVisible}
                  onBackdropPress={() =>
                    this.setState({ modalVisible: !this.state.modalVisible })
                  }
                  transferOverlay={this.transferOverlay}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  bedroom: !this.state.bedroom,
                })
              }
              style={styles.optionLast}
            >
              <Text style={styles.optionText}>Bedroom Equipment</Text>
              <Image
                style={styles.arrow}
                source={require('../../assets/images/Icons/Rightarrow.png')}
              />
              {this.state.bedroom && (
                <BedroomSub
                  modalVisible={this.state.modalVisible}
                  onBackdropPress={() =>
                    this.setState({ modalVisible: !this.state.modalVisible })
                  }
                  bedroomOverlay={this.bedroomOverlay}
                />
              )}
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
