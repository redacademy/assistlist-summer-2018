import React from 'react';
import { Text, ScrollView } from 'react-native';
import styles from './styles';

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      
        <Text style={styles.header}>Our Mission</Text>

        <Text style={styles.desc}>
          Our team's mission is simple: help individuals in our community who need
          home health equipment by connecting them with those who have equipment
          they no longer need.
      </Text>

        <Text style={styles.header}>Who we are</Text>
  
        <Text style={styles.desc}>
          We are a multidisciplinary team consisting of volunteers with
          backgrounds in health care, engineering, marketing, design and project
          management.
  
          Simply put, we want to make a positive contribution to our
          community. Each of us knows of someone, either family member, friend or
          through other close connections that have an injury, disability, or are
          just going through the normal aging process and are needing the use of
          home health medical equipment. These items come with a cost, and to
          some, the cost can be a heavy burden. We want to provide another option
          and means for those individuals who need home health medical equipment
          to connect with those who no longer need it.
      </Text>
      

    </ScrollView>
  );
};
export default AboutUs;
