import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import Frequently from './components/frequently';
import Notification from './components/notification';
import Activities from './components/activity';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {icons,images} from '../../assets/index';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: true
    }
  }
  handleLogout=async()=>{
    await AsyncStorage.setItem('isLogin','false')
    this.props.navigation.navigate('Login')
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation.navigate('PhoneNumber');
  };
  render() {
    // const {isModalVisible} = this.state;
    const activityList = Array.from({ length: 10 }); 
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.TopNav}> 
          <View style={styles.leftNav}>
            <Text style={styles.welcText}>Welcome</Text>
            <Text style={styles.name}>Kelvin</Text>
          </View>
          <View style={styles.rightNav}>
            <View style={styles.iconContainer}>
              <Image style={styles.iconstyle} source={icons.HomeCircle} />
            </View>
            <TouchableOpacity style={styles.iconContainer} onPress={this.handleLogout}>
              <Image style={styles.iconstyle} source={icons.Homebell} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.notification}>
            <Notification />
          </View>
          <Text style={styles.heading}>FREQUENTLY USED</Text>
          <View style={styles.frequentlyContner}>
            <Frequently title={'Calender'} />
            <Frequently title={'Customer'} />
            <Frequently title={'Messages'} />
          </View>
          <Text style={styles.heading}>ACTIVITIES</Text>
          <View style={styles.activitiesContainer}>
            {activityList.map((_, index) => (
              <Activities key={index} />
            ))}
          </View>
        </View>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}
          onRequestClose={this.toggleModal}
        >
          <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Image
                source={images.secureImage} 
                style={styles.image}
              />
              <View>
              <Text style={styles.modalTitle}>Secure your Account?</Text>
              <Text style={styles.modalText}>
                Setup two-factor authentication to secure your account in just two steps.
              </Text>
              <View style={styles.stepsContainer}>
                <View style={styles.modalView}>
                <Image source={icons.link}/>
                <Text style={styles.stepText}> Link your account with your phone number</Text>
                </View>
                <View style={styles.modalView}>
                  <Image source={icons.passcode}/>
                  <Text style={styles.stepText}> Enter the one-time passcode</Text>
                </View>
                <View style={styles.modalView}>
                  <Image source={icons.secure}/>
                <Text style={styles.stepText}> Secure your account</Text>
                </View>
              </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={this.toggleModal}>
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
          </TouchableWithoutFeedback>
        </Modal>
        
        
      </ScrollView>
    )
  }
}

