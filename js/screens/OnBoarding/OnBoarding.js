import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';

const SubtitleComp = props => {
  return <Text style={styles.text}>{props.subtitle}</Text>;
};

const Title = () => {
  return <Text></Text>
}

const OnBoarding = ({ navigation }) => {
  const Pages = [
    {
      title: <Title />,
      image: (
        <Image
          source={require('../../assets/images/Onboarding/Browse.png')}
          style={styles.images}
        />
      ),
      subtitle: (
        <SubtitleComp
          subtitle={`Create a listing and connect with Vancouver locals to exchange home health equipment.`}
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
          style={styles.images}
        />
      ),
      subtitle: (
        <SubtitleComp
          subtitle={
            'Contact individual for more information or to coordinate a meeting.'
          }
        />
      ),
      backgroundColor: 'white',
    },
    {
      title: <Title />,
      image: (
        <Image
          source={require('../../assets/images/Onboarding/Exchange.png')}
          style={styles.lastImage}
        />
      ),
      subtitle: (
        <SubtitleComp
          subtitle={`All the listings are ranked by the time of your last refresh. 
            
When your listing ranking drops you can hit refresh in My listings to bump it up to the top! `}
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
        navigation.goBack();
      }}
      imageContainerStyles={{ paddingBottom: 0, }}
    />

  );
};

export default OnBoarding;
