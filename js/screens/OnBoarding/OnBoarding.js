import React from 'react';
import { Text, Image, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { colors } from '../../config/styles';
import styles from './styles';
import PropTypes from 'prop-types';

const SubtitleComp = props => {
  return <Text style={styles[props.style]}>{props.subtitle}</Text>;
};

const Title = () => {
  return <Text />;
};
const Circle = ({ selected }) => {
  let backgroundColor = colors.darkBlue;
  backgroundColor = selected ? colors.darkBlue : 'white';
  return (
    <View
      style={{
        width: 9,
        height: 9,
        marginHorizontal: 3,
        backgroundColor: backgroundColor,
        borderColor: colors.darkBlue,
        borderWidth: 1,
        borderRadius: 9,
        marginBottom: 20,
      }}
    />
  );
};

const OnBoarding = ({ navigation }) => {
  const Pages = [
    {
      title: <Title />,
      image: (
        <Image
          source={require('../../assets/images/Onboarding/Browse.png')}
          style={styles.firstStepImage}
        />
      ),
      subtitle: (
        <SubtitleComp
          subtitle={`Create a listing and connect with Vancouver locals to exchange home health equipment.`}
          style={'firstsecondStepText'}
        />
      ),
      backgroundColor: 'white',
      alterBottomColor: 'white',
    },
    {
      title: <Title />,
      image: (
        <Image
          source={require('../../assets/images/Onboarding/Chat.png')}
          style={styles.otherStepImages}
        />
      ),
      subtitle: (
        <SubtitleComp
          subtitle={
            'Contact individual for more information or to coordinate a meeting.'
          }
          style={'firstsecondStepText'}
        />
      ),
      backgroundColor: 'white',
    },
    {
      title: <Title />,
      image: (
        <Image
          source={require('../../assets/images/Onboarding/Exchange.png')}
          style={styles.otherStepImages}
        />
      ),
      subtitle: (
        <SubtitleComp
          subtitle={`All the listings are ranked by the time of your last refresh. 
When your listing ranking drops you can hit refresh in My listings to bump it up to the top! `}
          style={'lastText'}
        />
      ),
      backgroundColor: 'white',
    },
  ];
  return (
    <Onboarding
      bottomBarHighlight={false}
      pages={Pages}
      showSkip={false}
      showNext={false}
      onDone={() => {
        navigation.navigate('Listings');
      }}
      imageContainerStyles={styles.ImageContainer}
      DotComponent={Circle}
    />
  );
};
Onboarding.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default OnBoarding;
