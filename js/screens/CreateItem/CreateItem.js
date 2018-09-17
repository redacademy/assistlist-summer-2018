import React, { Fragment, Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  Image,
  Dimensions
} from 'react-native';
import { Form, Field } from 'react-final-form';
import SelectInput from '../../components/SelectInput';
import styles from './styles';
import ImagePicker from 'react-native-image-picker'

const addImageIcon = require('../../assets/images/Icons/addImage.jpg')
const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
};

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPicker: false,
      SwitchValue: false,
      photos: []
    };
  }

  pickImage = (num) => {
    let photoArray = [...this.state.photos]
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        photoArray[num] = { uri: 'data:image/jpeg;base64,' + response.data }
        this.setState({ photos: photoArray })
      }
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
          <TouchableOpacity onPress={() => { this.pickImage(0) }}>
            {this.state.photos[0] ?
              <Image style={styles.selectedImage} source={this.state.photos[0]} />
              :
              (<View style={styles.defaultImageContainer}>
                <Image style={styles.defaultImage} source={addImageIcon} />
              </View>)
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pickImage(1) }}>
            {this.state.photos[1] ?
              <Image style={styles.selectedImage} source={this.state.photos[1]} />
              :
              (<View style={styles.defaultImageContainer}>
                <Image style={styles.defaultImage} source={addImageIcon} />
              </View>)
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.pickImage(2) }}>
            {this.state.photos[2] ?
              <Image style={styles.selectedImage} source={this.state.photos[2]} />
              :
              (<View style={styles.defaultImageContainer}>
                <Image style={styles.defaultImage} source={addImageIcon} />
              </View>)
            }
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Form
            onSubmit={values => {
              console.log(values);
            }}
            render={({ handleSubmit, pristine, invalid, values }) => (
              <Fragment>
                <Field
                  name="category"
                  render={({ input, meta }) => (
                    <Fragment>
                      <Text style={styles.title}>Category *</Text>
                      <SelectInput data={this.props.categoryList} />
                    </Fragment>
                  )}
                />
                <Field
                  name="title"
                  render={({ input, meta }) => (
                    <Fragment>
                      <Text style={styles.title}>Title *</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Title"
                        {...input}
                      />
                    </Fragment>
                  )}
                />
                <Text style={styles.title}>Price *</Text>
                <View style={styles.priceForm}>
                  <Field
                    name="price"
                    render={({ input, meta }) => (
                      <View style={styles.priceContainer}>
                        <View style={styles.inputPrice}>
                          <Text style={styles.dollarSign}>$</Text>
                          <TextInput
                            editable={!this.state.SwitchValue}
                            placeholder="Price"
                            {...input}
                            keyboardType={'numeric'}
                            style={styles.dollarText}
                          />
                        </View>
                      </View>
                    )}
                  />
                  <View style={styles.freeContainer}>
                    <Text style={styles.TextFree}>Free</Text>
                    <Switch
                      onValueChange={value =>
                        this.setState({ SwitchValue: value })
                      }
                      value={this.state.SwitchValue}
                    />
                  </View>
                </View>

                <Field
                  name="location"
                  render={({ input, meta }) => (
                    <Fragment>
                      <Text style={styles.title}>Location</Text>
                      <SelectInput data={this.props.locationList} />
                    </Fragment>
                  )}
                />
                <Field
                  name="description"
                  render={({ input, meta }) => (
                    <Fragment>
                      <Text style={styles.title}>Description</Text>
                      <TextInput
                        style={styles.textArea}
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Description"
                        {...input}
                      />
                    </Fragment>
                  )}
                />
                <Field
                  name="notification"
                  render={({ input, meta }) => (
                    <Fragment>
                      <Text style={styles.title}>Notification *</Text>
                      <SelectInput data={this.props.notificationList} />
                    </Fragment>
                  )}
                />

                <Text style={styles.message}>
                  Want to be notified when your listing is bumped to the next
                  page? We can send you notifications to REFRESH in MY LISTING, to
                  bump it back up to the top!
              </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.buttonText}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </Fragment>
            )}
          />
        </View>
      </ScrollView>

    );
  }
}

export default CreateItem;
