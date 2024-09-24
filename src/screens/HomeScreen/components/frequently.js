import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {icons} from '../../../assets/index'
class FrequrentlyUsed extends Component {
  handlePress = () => {
   console.log('//')
  };

  render() {
    return (
      <View style={styles.parentContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.handlePress}>
          <View style={styles.iconContainer}>
            <Image style={styles.announcStyle} source={icons.Calender} />
          </View>
          <Text style={styles.text}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: 'white',
    height: 110,
    width: 110,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#46a4ba',
    borderRadius: 100,
  },
  text: {
    marginTop: 10, // Space between icon and text
    fontSize: 16,
    color: '#000', // Black text color
    textAlign: 'center',
  },
  announcStyle: {
    height: 50,
    width: 50,
  },
});

export default FrequrentlyUsed;