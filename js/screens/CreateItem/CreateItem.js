import React, { Fragment, Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Form, Field } from 'react-final-form';
import moment from 'moment';
import SelectInput from '../../components/SelectInput';
import styles from './styles';
const addImageIcon = require('../../assets/images/Icons/addImage.jpg');
import PhotoUpload from 'react-native-photo-upload';

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SwitchValue: false,
      photos: [addImageIcon, addImageIcon, addImageIcon],
      subCategory: '',
      location: '',
      loading: false,
    };
    this.child = React.createRef();
    this.child2 = React.createRef();
  }

  getCategory = categoryId => {
    this.setState({ subCategory: categoryId });
  };

  getLocation = locationId => {
    this.setState({ location: locationId });
  };

  pickImage = (image, index) => {
    let photoArray = [...this.state.photos];
    photoArray[index] = image;
    this.setState({ photos: photoArray });
  };
  onClick = () => {
    this.child.current.clearInput();
    this.child2.current.clearInput();
  };

  render() {
    return this.state.loading ? (
      <ActivityIndicator size="large" />
    ) : (
      <ScrollView style={styles.container}>
        <View style={styles.miniContainer}>
          <View style={styles.imageSelect}>
            {this.state.photos.map((image, index) => {
              return (
                <PhotoUpload
                  key={index}
                  quality={4}
                  onPhotoSelect={avatar => {
                    if (avatar) {
                      this.pickImage(avatar, index);
                    }
                  }}
                >
                  {image !== addImageIcon ? (
                    <View style={styles.option}>
                      <View style={styles.defaultImageContainer}>
                        <Image
                          style={styles.selectedImage}
                          source={{ uri: 'data:image/jpeg;base64,' + image }}
                        />
                      </View>
                    </View>
                  ) : (
                    <View style={styles.option}>
                      <View style={styles.defaultImageContainer}>
                        <Image style={styles.selectedImage} source={image} />
                      </View>
                    </View>
                  )}
                </PhotoUpload>
              );
            })}
          </View>
          <Form
            onSubmit={async (values, form) => {
              this.setState({ loading: !this.state.loading });
              let priceValue = this.state.SwitchValue
                ? 0
                : parseInt(values.price);

              try {
                await this.props.createItem.mutation({
                  variables: {
                    userId: this.props.userId,
                    locationId: this.state.location,
                    title: values.title,
                    description: values.description,
                    price: priceValue,
                    postStatus: moment().format(),
                    subCategoryId: this.state.subCategory,
                    images: this.state.photos,
                  },
                });
                form.reset();
                this.setState({
                  photos: [addImageIcon, addImageIcon, addImageIcon],
                  loading: !this.state.loading,
                });
                this.props.navigation.navigate('MyListings');
              } catch (e) {
                console.log(e);
              }
            }}
            render={({ handleSubmit, pristine, invalid, values, form }) => (
              <Fragment>
                <Field
                  name="category"
                  render={({ input, meta }) => (
                    <Fragment>
                      <Text style={styles.title}>Category *</Text>
                      <SelectInput
                        ref={this.child}
                        question={'category'}
                        data={this.props.categoryList}
                        getCategory={this.getCategory}
                        clearInput={this.clearInput}
                      />
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
                        <Text style={styles.dollarSign}>$</Text>
                        <TextInput
                          editable={!this.state.SwitchValue}
                          placeholder="price"
                          {...input}
                          keyboardType={'numeric'}
                          style={styles.dollarText}
                        />
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
                      <SelectInput
                        ref={this.child2}
                        question={'location'}
                        data={this.props.locationList}
                        getLocation={this.getLocation}
                      />
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

                <Text style={styles.message}>
                  Want to be notified when your listing is bumped to the next
                  page? We can send you notifications to REFRESH in MY LISTING,
                  to bump it back up to the top!
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                    disabled={pristine}
                  >
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
