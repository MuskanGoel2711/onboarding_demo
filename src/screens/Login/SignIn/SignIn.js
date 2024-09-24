import React from 'react';
import {Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import styles from './style';
import Toast from 'react-native-toast-message';
import CustomInput from '../../../components/TextInput/TextInput';
import CustomButton from '../../../components/Button/Button';
import {icons} from '../../../assets/index';
import CustomToast from '../../../components/Toast/Toast';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isPasswordVisible: 'false',
      errors: {},
      errorEmail: '',
      errorPassword: '',
      loginAttempts: 0,
      isAlertVisible: false,
      loginError: false,
    };
    this.passwordInputRef = React.createRef();
  }
  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };
  handleEmailChange = email => {
    this.setState({
      email,
      isEmailValid: this.validateEmail(email),
    });
  };
  handlePasswordChange = password => {
    this.setState({
      password,
      isPasswordValid: this.validatePassword(password),
    });
  };
  validateEmail = () => {
    const {email} = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.setState({errorEmail: 'Please enter a valid email address.'});
      return false;
    } else {
      this.setState({errorEmail: ''});
      return true;
    }
  };
  validatePassword = () => {
    const {password} = this.state;
    if (password.length < 5) {
      this.setState({
        errorPassword: 'Password must be at least 6 characters long.',
      });
      return false;
    } else {
      this.setState({errorPassword: ''});
      return true;
    }
  };
  handleSubmit = async () => {
    if (this.passwordInputRef.current) {
        this.passwordInputRef?.current?.focus();
    }
    const isEmailValid = this.validateEmail();
    const isPasswordValid = this.validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log('Login successful');
      this.setState({loginAttempts: 0, loginError: false});
      this.props.onPrimary();
    } else {
      this.setState(prevState => {
        const loginAttempts = prevState.loginAttempts + 1;

        if (loginAttempts >= 5) {
          this.setState({isAlertVisible: true});
        }

        return {loginAttempts, loginError: true};
      });
      Toast.show({
        type: 'custom_error',
        position: 'top',
        text1: 'Invalid credentials. Please try again',
        autoHide: true,
        containerStyle: {
          backgroundColor: '#F04438',
        },
      });
    }
  };
  closeModal = () => {
    this.setState({isAlertVisible: false});
  };
  render() {
    console.log(this.props.ref);
    const {
      email,
      password,
      errors,
      isAlertVisible,
      isPasswordVisible,
      errorEmail,
      errorPassword,
      loginError,
    } = this.state;
    const isButtonDisabled = !(email && password);
    const buttonStyle = isButtonDisabled
      ? styles.buttonDisabled
      : styles.buttonContainer;

    const emailErrorStyle = errorEmail ? {tintColor: 'red'} : {};
    const passwordErrorStyle = errorPassword ? {tintColor: 'red'} : {};
    const emailPlaceholderColor = errorEmail ? 'red' : '#60707D';
    const passwordPlaceholderColor = errorPassword ? 'red' : '#60707D';
    const emailIconColor = errorEmail ? {tintColor: 'red'} : {};
    const passwordIconColor = errorPassword ? {tintColor: 'red'} : {};

    return (
      <View style={styles.container}>
        <Text style={styles.inputText1}>Sign In</Text>
        <Text style={styles.inputText2}>with your valid credential</Text>
        <View style={styles.sectionStyle}>
          <CustomInput
            placeholder="Email Address"
            input={[styles.input, emailErrorStyle]}
            inputContainer={styles.inputContainer}
            onChangeText={this.handleEmailChange}
            value={email}
            tintColor={emailPlaceholderColor}
            onBlur={this.validateEmail}
            labelOffset={{x1: 142, y1: -5, x0: 155, y0: -10}}
            onSubmitEditing={this.handleSubmit}
            // contentInset={{ left: 100 }}
          />
          <Image
            source={icons.EmailIcon}
            style={[styles.EmailIcon, emailIconColor]}
          />
          {errorEmail ? (
            <Text style={styles.errorText}>{errorEmail}</Text>
          ) : null}
        </View>
        <View style={styles.sectionStyle}>
          <View style={styles.inputContainer}>
            <CustomInput
              placeholder="Password"
              input={[styles.input, passwordErrorStyle]}
              inputContainer={styles.inputContainer}
              onChangeText={this.handlePasswordChange}
              value={password}
              tintColor={passwordPlaceholderColor}
              // secureTextEntry={isPasswordVisible}
              onBlur={this.validatePassword}
              forwardedRef={this.passwordInputRef}
              labelOffset={{x1: 144, y1: -5, x0: 155, y0: -10}}
            />
            <Image
              source={icons.LockIcon}
              style={[styles.Lockicon, passwordIconColor]}
            />
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={this.togglePasswordVisibility}>
              <Image
                source={isPasswordVisible ? icons.hide : icons.eye}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
          {errorPassword ? (
            <Text style={styles.errorText}>{errorPassword}</Text>
          ) : null}
        </View>

        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>

        <CustomButton
          style={buttonStyle}
          buttonBox={styles.buttonBox}
          text="Primary"
          onPress={this.handleSubmit}
        />
        <Modal
          visible={isAlertVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this.setState({isAlertVisible: false})}>
          <View style={styles.modalOverlay}>
            <View style={styles.alertBox}>
              <Image source={icons.PadLock} style={styles.alertImage} />
              <Text style={styles.alertTitle}>Account Locked</Text>
              <Text style={styles.alertMessage}>
                Your account has been locked due to too many failed attempts.
                Please try again after some time.
              </Text>
              <TouchableOpacity
                style={styles.alertButton}
                onPress={this.closeModal}>
                <Text style={styles.alertButtonText}>Okay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Toast
          config={{custom_error: ({text1}) => <CustomToast text1={text1} />}}
          ref={ref => Toast.setRef(ref)}
        />
      </View>
    );
  }
}
