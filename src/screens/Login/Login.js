import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  StatusBar,
} from 'react-native';
import styles from './style';
import SignIn from './SignIn/SignIn';
import {icons, images} from '../../assets/index';
import CustomFlatList from '../../components/Flatlist/FlatList';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          source: icons.stat,
          text1: 'Aesthetical',
          text2: 'Graphics',
        },
        {
          id: 2,
          source: icons.clock,
          text1: 'Real Time',
          text2: 'statistics',
        },
        {
          id: 3,
          source: icons.quant,
          text1: 'Track equipment',
          text2: 'usage',
        },
      ],
    };
  }
  handleForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };
  handlePrimaryButton = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  render() {
    const {data} = this.state;
    const {height} = Dimensions.get('screen');

    const isSmallDevice = height <= 667;

    console.log('height', height, StatusBar.currentHeight, isSmallDevice);

    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#478CCF',
            paddingHorizontal: 20,
            paddingTop: isSmallDevice ? 0 : 35,
          }}>
          <Image source={images.logo} style={styles.gif} />
        </View>

        <KeyboardAwareScrollView
          bounces={false}
          // extraHeight={270}
          extraHeight={height * (isSmallDevice ? 0.38 : 0.41)}
          showsVerticalScrollIndicator={false}>
          <View style={styles.topView}>
            <View>
              <Text style={styles.text1}>QUIVIO</Text>
              <Text style={styles.text2}>Your Personal CarWash Assistant</Text>
            </View>
            <View style={styles.lineView} />
            <CustomFlatList
              data={data}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <SignIn
            onPress={this.handleForgotPassword}
            onPrimary={this.handlePrimaryButton}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
