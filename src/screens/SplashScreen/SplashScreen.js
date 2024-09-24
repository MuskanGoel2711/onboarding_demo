import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {images} from '../../assets/index';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLaunch: null
        }
    }
    async componentDidMount() {
        try {
            const value = await AsyncStorage.getItem('firstLaunch');
            if (value === null) {
                await AsyncStorage.setItem('firstLaunch', 'false');
                setTimeout(() => {
                    this.props.navigation.navigate('TutorialScreen')
                    this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'TutorialScreen' }],
                    });
                }, 2000);
            } else {
                setTimeout(() => {
                    this.props.navigation.navigate('Login');
                    this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }],
                    });
                }, 2000);
                // await AsyncStorage.setItem('firstLaunch', 'false')
            }

        } catch (error) {
            console.error('Error accessing AsyncStorage: ', error);
        }
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.RootView}>
                    <View style={styles.ChildView}>
                        <Image source={images.White}
                            style={styles.gif} />
                    </View>
                </View>
            </View>
        )
    }
}



export default SplashScreen;