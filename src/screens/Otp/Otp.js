import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, Alert } from 'react-native';
import styles from './style';
import OTPTextInput from 'react-native-otp-textinput';
import CustomButton from '../../components/Button/Button';
import {icons} from '../../assets/index';

class VerificationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            predefinedCode: '123456',
            attemptsLeft: 3,
            enteredCode: '',
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
        };
    }
    handleCodeChange = (code) => {
        this.setState({ enteredCode: code });
    };
    handleConfirmCode = () => {
        const { enteredCode, predefinedCode, attemptsLeft } = this.state;
        if(!enteredCode){
            return
        }
        if (enteredCode === predefinedCode) {
            this.setState({ isSuccessModalVisible: true });
        } else {
            this.setState({ attemptsLeft: attemptsLeft - 1 }, () => {
                if (this.state.attemptsLeft > 0) {
                    // Alert.alert('Error', `Incorrect code. You have ${this.state.attemptsLeft} attempts remaining.`);
                } else {
                    this.setState({ isErrorModalVisible: true });
                }
            });
        }
    };

    handleResendCode = () => {
        Alert.alert('Code Resent', 'A new code has been sent to your phone.');
        this.props.navigation.navigate('PhoneNumber');
    };

    closeSuccessModal = () => {
        this.setState({ isSuccessModalVisible: false });
        this.props.navigation.navigate('Login');
    };

    closeErrorModal = () => {
        this.setState({ isErrorModalVisible: false });
        this.props.navigation.navigate('Login')
    };
    goBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        const { enteredCode, attemptsLeft, isSuccessModalVisible, isErrorModalVisible } = this.state;
        const isButtonDisabled = !(enteredCode);
        const buttonStyle = isButtonDisabled ? styles.buttonDisabled : styles.buttonContainer;

        return (
            <View style={styles.container}>
                    <TouchableOpacity style={styles.leftIcon} onPress={this.goBack}>
                    <Image
                        source={icons.leftArrow} style={styles.leftArrow}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Verify Account Access</Text>
                <Text style={styles.subtitle}>Enter the verification code sent to </Text>
                <Text style={styles.subtitle1}>+1-788-895-5435.</Text>
                <View>
                    <OTPTextInput
                        handleTextChange={this.handleCodeChange}
                        inputCount={6}
                        textInputStyle={styles.otpInput}
                        tintColor={'#ccc'}
                        containerStyle={[styles.Inputcontainer, attemptsLeft < 3 ? {tintColor: 'red'}: null]}
                    />
                    {attemptsLeft < 3 && (
                        <View style={styles.errorView}>
                            <Image source={icons.alert} style={styles.errorImage} />
                            <Text style={styles.errorText}>
                                The code you entered is incorrect, you have {attemptsLeft} attempt(s) remaining.
                            </Text>
                        </View>

                    )}
                </View>
                <TouchableOpacity onPress={this.handleResendCode}>
                    <Text style={styles.resendText}>Resend</Text>
                </TouchableOpacity>
                <CustomButton
                    style={buttonStyle}
                    buttonBox={styles.buttonBox}
                    text='Confirm Code'
                    onPress={this.handleConfirmCode}
                />
                <Modal
                    visible={isSuccessModalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={this.closeSuccessModal}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Image source={icons.verified} style={styles.modalImage}/>
                            <Text style={styles.modalTitle}>Account Verified!</Text>
                            <Text style={styles.modalText}>Your account has been verified successfully.</Text>
                            <TouchableOpacity style={styles.modalButton} onPress={this.closeSuccessModal}>
                                <Text style={styles.modalButtonText}>Back To Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Modal
                    visible={isErrorModalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={this.closeErrorModal}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Image source={icons.modalError} style={styles.modalImage}/>
                            <Text style={styles.modalTitle}>Too many failed attempts</Text>
                            <Text style={styles.modalText}>
                                Your account has been locked, please try again in one hour.
                                {/* Incorrect code. You have {attemptsLeft} attempts remaining. */}
                            </Text>
                            <TouchableOpacity style={styles.modalButton} onPress={this.closeErrorModal}>
                                <Text style={styles.modalButtonText}>Back To Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default VerificationScreen;


