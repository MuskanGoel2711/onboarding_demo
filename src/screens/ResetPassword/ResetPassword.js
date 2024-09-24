import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './style';
import CustomInput from '../../components/TextInput/TextInput';
import CustomButton from '../../components/Button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {icons, images} from '../../assets/index';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      conditions: {
        length: false,
        specialChar: false,
        number: false,
        uppercaseLowercase: false,
      },
      passwordVisible: false,
      confirmPasswordVisible: false,
      isSubmitDisabled: true,
      loginAttempts: 0,
      loginError: false,
      isAlertVisible: false,
      isPasswordFocused: false,
      isConfirmPasswordFocused: false,
    };
    this.confirmPasswordInputRef = React.createRef();
  }

  handlePasswordChange = password => {
    const conditions = {
      length: password.length >= 8,
      specialChar: /[!@#$%^&*(),.?":{}|<>]/g.test(password),
      number: /[0-9]/.test(password),
      uppercaseLowercase: /[A-Z]/.test(password) && /[a-z]/.test(password),
    };
    this.setState({password, conditions}, this.updateSubmitButtonState);
  };
  handleConfirmPasswordChange = confirmPassword => {
    this.setState({confirmPassword}, this.updateSubmitButtonState);
  };

  togglePasswordVisibility = () => {
    this.setState(prevState => ({passwordVisible: !prevState.passwordVisible}));
  };

  toggleConfirmPasswordVisibility = () => {
    this.setState(prevState => ({
      confirmPasswordVisible: !prevState.confirmPasswordVisible,
    }));
  };

  updateSubmitButtonState = () => {
    const {password, confirmPassword, conditions} = this.state;
    const allConditionsMet = Object.values(conditions).every(Boolean);
    const passwordsMatch = password === confirmPassword;

    this.setState({
      isSubmitDisabled: !(allConditionsMet && passwordsMatch),
    });
  };

  renderCondition = (condition, text) => {
    return (
      <View style={styles.condition}>
        <Image source={condition ? icons.tick : icons.cross} />
        <Text style={styles.conditionText}>{text}</Text>
      </View>
    );
  };

  handleSubmit = () => {
    if (this.confirmPasswordInputRef.current) {
      // console.log(this.confirmPasswordInputRef, 'this.confirmPasswordInputRef');
      this.confirmPasswordInputRef?.current?.focus();
    }
    const {isSubmitDisabled} = this.state;
    if (!isSubmitDisabled) {
      console.log('Password updated successfully!');
      this.setState({isAlertVisible: true});
    } else {
      console.log('Passwords do not match or do not meet conditions.');
    }
  };
  closeModal = () => {
    this.setState({isAlertVisible: false});
    this.props.navigation.navigate('Login');
  };
  handlePasswordFocus = () => {
    this.setState({isPasswordFocused: true});
  };

  handlePasswordBlur = () => {
    this.setState({isPasswordFocused: false});
  };
  render() {
    const {
      password,
      confirmPassword,
      conditions,
      passwordVisible,
      confirmPasswordVisible,
      isSubmitDisabled,
      isAlertVisible,
      isPasswordFocused,
      isConfirmPasswordFocused,
    } = this.state;
    const isButtonDisabled = !password;
    const buttonStyle = isButtonDisabled
      ? styles.buttonDisabled
      : styles.buttonContainer;
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container1}>
          <View style={styles.containe2}>
            <Image style={styles.arrowStyle} source={images.ColorLogo} />
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>Enter in your new password.</Text>

            <View style={styles.inputContainer}>
              <CustomInput
                placeholder="New Password"
                input={styles.input}
                inputContainer={styles.inputContainer}
                onChangeText={this.handlePasswordChange}
                value={password}
                placeholderTextColor="#60707D"
                secureTextEntry={!passwordVisible}
                // onBlur={this.validatePassword}
                onSubmitEditing={this.handleSubmit}
                // onFocus={this.handlePasswordFocus}
                // onBlur={this.handlePasswordBlur}
                contentInset={{left: 130}}
                labelOffset={{x1: 147, y1: -5, x0: 150, y0: -10}}
              />
              <Image source={icons.LockIcon} style={styles.Lockicon} />
              <TouchableOpacity
                onPress={this.togglePasswordVisibility}
                style={styles.iconContainer}>
                <Image
                  source={passwordVisible ? icons.hide : icons.eye}
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            </View>
            {isPasswordFocused && (
              <View style={styles.conditionsContainer}>
                {this.renderCondition(
                  conditions.length,
                  '8 characters or above',
                )}
                {this.renderCondition(
                  conditions.specialChar,
                  '1 or more special characters',
                )}
                {this.renderCondition(conditions.number, '1 or more numbers')}
                {this.renderCondition(
                  conditions.uppercaseLowercase,
                  'Upper and lowercase',
                )}
              </View>
            )}
            <View style={styles.inputContainer}>
              <CustomInput
                placeholder="Confirm Password"
                input={styles.input}
                inputContainer={styles.inputContainer}
                onChangeText={this.handleConfirmPasswordChange}
                value={confirmPassword}
                placeholderTextColor="#60707D"
                secureTextEntry={!confirmPasswordVisible}
                onBlur={this.validatePassword}
                forwardedRef={this.confirmPasswordInputRef}
                contentInset={{left: 130}}
                labelOffset={{x1: 147, y1: -5, x0: 150, y0: -10}}
              />
              <Image source={icons.LockIcon} style={styles.Lockicon} />
              <TouchableOpacity
                onPress={this.toggleConfirmPasswordVisibility}
                style={styles.iconContainer}>
                <Image
                  source={confirmPasswordVisible ? icons.hide : icons.eye}
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -55 : 0}>
            <CustomButton
              style={buttonStyle}
              text="Continue"
              onPress={this.handleSubmit}
              isButtonDisabled={isSubmitDisabled}
            />
          </KeyboardAvoidingView>
        </View>

        <Modal
          visible={isAlertVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this.setState({isAlertVisible: false})}>
          <View style={styles.modalOverlay}>
            <View style={styles.alertBox}>
              <Image source={icons.PadLock} style={styles.alertImage} />
              <Text style={styles.alertTitle}>Password Updated!</Text>
              <Text style={styles.alertMessage}>
                Your new password has been updated successfully.
              </Text>
              <TouchableOpacity
                style={styles.alertButton}
                onPress={this.closeModal}>
                <Text style={styles.alertButtonText}>Back To Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </KeyboardAwareScrollView>
    );
  }
}

export default ResetPassword;
