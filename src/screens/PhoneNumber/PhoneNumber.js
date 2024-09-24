import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import CustomToast from '../../components/Toast/Toast';
import CustomButton from '../../components/Button/Button';
import {icons} from '../../assets/index';

class PhoneNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: 'US',
      phoneNumber: '',
      predefinedNumber: '1234567890',
    };
  }
  onSelect = country => {
    this.setState({countryCode: country.cca2});
  };
  handlePhoneNumberChange = text => {
    const numericText = text.replace(/[^0-9]/g, '');
    this.setState({phoneNumber: numericText});
  };
  handleSendCode = () => {
    const {predefinedNumber, phoneNumber} = this.state;
    if (!phoneNumber) {
      Toast.show({
        type: 'custom_error',
        text1: 'Please enter number.',
        position: 'top',
        autoHide: true,
        containerStyle: {
          backgroundColor: '#F04438',
        },
      });
      return;
    }
    if (phoneNumber === predefinedNumber) {
      // alert(`Phone Number: ${this.state.countryCode} ${this.state.phoneNumber}`);
      this.props.navigation.navigate('VerifyAccountAccess');
    } else {
      Toast.show({
        type: 'custom_error',
        text1: 'User exists. Try a different number.',
        position: 'top',
        autoHide: true,
        containerStyle: {
          backgroundColor: '#F04438',
        },
      });
    }
  };
  handleBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    const {countryCode, phoneNumber} = this.state;
    const isButtonDisabled = !(countryCode && phoneNumber);
    const buttonStyle = isButtonDisabled
      ? styles.buttonDisabled
      : styles.buttonContainer;
    return (
      <KeyboardAwareScrollView
        style={{flex: 1}}
        enableAutomaticScroll
        extraScrollHeight={Platform.OS === 'ios' ? 100 : 120}
        keyboardOpeningTime={0}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.leftIcon} onPress={this.handleBack}>
            <Image source={icons.leftArrow} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.TextContainer}>
            <Text style={styles.title}>Add Phone Number</Text>
            <Text style={styles.text}>
              To initiate the two factor authenticaton, provide your phone
              number below.
            </Text>
          </View>
          <View style={styles.phoneInput}>
            <PhoneInput
              defaultValue={this.state.phoneNumber}
              defaultCode={this.state.countryCode}
              layout="first"
              onChangeCountry={this.onSelect}
              onChangeText={this.handlePhoneNumberChange}
              textInputProps={{
                value: this.state.phoneNumber,
                onChangeText: this.handlePhoneNumberChange,
                keyboardType: 'number-pad',
                maxLength: 10,
              }}
              containerStyle={styles.phoneInputContainer}
              textContainerStyle={styles.textInputContainer}
              codeTextStyle={styles.codeText}
              textInputStyle={styles.phoneText}
              flagButtonStyle={styles.flagButton}
            />
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
            <CustomButton
              style={buttonStyle}
              buttonBox={styles.buttonBox}
              onPress={this.handleSendCode}
              text="Send Code"
            />
          </KeyboardAvoidingView>
        </View>
        <Toast
          config={{custom_error: ({text1}) => <CustomToast text1={text1} />}}
          ref={ref => Toast.setRef(ref)}
        />
      </KeyboardAwareScrollView>
    );
  }
}

export default PhoneNumber;
