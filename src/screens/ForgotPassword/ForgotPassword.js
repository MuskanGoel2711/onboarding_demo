import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Modal, KeyboardAvoidingView } from 'react-native';
import CustomInput from '../../components/TextInput/TextInput';
import CustomButton from '../../components/Button/Button';
import CustomToast from '../../components/Toast/Toast';
import Toast from 'react-native-toast-message';
import styles from './style';
import {icons} from '../../assets/index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isEmailValid: false,
            errorEmail: '',
            isAlertVisible: false,
        }
    }
    validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.setState({ errorEmail: "Please enter a valid email address.", isEmailValid: false});
            return false;
        } else {
            this.setState({ errorEmail: '', isEmailValid: true});
            return true;
        }
    }
    handleEmailChange = (email) => {
        this.setState({email}, ()=>{
            this.validateEmail(email);
        });
    }
    backButton = () => {
        this.props.navigation.goBack();
    }
    handleSubmit = async () => {
        const { email } = this.state;
        const isValid = this.validateEmail(email);

        if (isValid) {
            console.log('Send to:',email);
            this.setState({ isAlertVisible: true });
        } else {
            Toast.show({
                type: 'custom_error',
                position: 'top',
                text1: 'Email not found. Contact admin.',
                autoHide: true,
                containerStyle: {
                    backgroundColor: '#F04438',
                },
            });
        }
    }
    closeModal = () => {
        this.setState({ isAlertVisible: false });
        this.props.navigation.navigate('ResetPassword');
    }
    render() {
        const { email, errorEmail, isAlertVisible } = this.state;
        const isButtonDisabled = !(email);
        const buttonStyle = isButtonDisabled ? styles.buttonDisabled : styles.buttonContainer;
        const emailErrorStyle = errorEmail ? { tintColor: 'red' } : {};
        const emailPlaceholderColor = errorEmail ? 'red' : '#60707D';
        const emailIconColor = errorEmail ? { tintColor: 'red' } : {};
        return (
            <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                    <TouchableOpacity style={styles.imageView} onPress={this.backButton}>
                    <Image source={icons.leftArrow} />
                </TouchableOpacity>
                <View style={styles.mainContainer}>
                    <Text style={styles.title}>Forgot Password</Text>
                    <Text style={styles.description}>
                        Reset your password with just a few clicks
                    </Text>
                    <View>
                        <View style={styles.inputContainer}>
                        <CustomInput
                            placeholder='Email Address'
                            input={[styles.input, emailErrorStyle]}
                            inputContainer={styles.inputContainer}
                            onChangeText={this.handleEmailChange}
                            value={email}
                            tintColor={emailPlaceholderColor}
                            placeholderTextColor='#60707D'
                            onBlur={this.validateEmail}
                            ref={this.EmailInputRef}
                            labelOffset={{x1: 145, y1: -5, x0: 150, y0: -10}}
                            contentInset={{left: 110}}
                         
                        />
                            <Image source={icons.EmailIcon} style={[styles.EmailIcon, emailIconColor]} />
                        </View>
                        {errorEmail ? <Text style={styles.errorText}>{errorEmail}</Text> : null}
                    </View>
                    </View>
                </View>
                <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : null}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 45 : 0}
                    >
                    <CustomButton style={buttonStyle} text='Send Link' onPress={this.handleSubmit} />
                    </KeyboardAvoidingView>
                   
                    <Modal
                        visible={isAlertVisible}
                        transparent={true}
                        animationType="fade"
                        onRequestClose={this.closeModal}
                    >
                        <View style={styles.modalOverlay}>
                            <View style={styles.alertBox}>
                                <Image source={icons.AlertIcon} style={styles.alertImage} />
                                <Text style={styles.alertTitle}>Link Sent!</Text>
                                <Text style={styles.alertMessage}>The link to reset your password has been sent on your email address.</Text>
                                <TouchableOpacity
                                    style={styles.alertButton}
                                    onPress={this.closeModal}
                                >
                                    <Text style={styles.alertButtonText}>Reset Password</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
                <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} ref={(ref) => Toast.setRef(ref)} />
            </KeyboardAwareScrollView>
        )
    }
}

export default ForgotPassword;