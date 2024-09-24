import React from 'react';
import Login from '../screens/Login/Login';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import TutorialScreen from '../screens/TutorialScreen/TutorialScreen';
import PhoneNumber from '../screens/PhoneNumber/PhoneNumber';
import VerifyAccountAccess from '../screens/Otp/Otp';
import BottomTab from '../navigator/BottomTab'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class NativeStack extends React.Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="VerifyAccountAccess" component={VerifyAccountAccess} options={{ gestureEnabled: false }}/> */}
                {/* <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ gestureEnabled: false }} /> */}
                {/* <Stack.Screen name="HomeScreen" component={BottomTab} options={{ gestureEnabled: false }}/> */}
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="TutorialScreen" component={TutorialScreen} />
                <Stack.Screen name="Login" component={Login} options={{ gestureEnabled: false }} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ gestureEnabled: false }} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ gestureEnabled: false }} />
                <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ gestureEnabled: false }} />
                <Stack.Screen name="VerifyAccountAccess" component={VerifyAccountAccess} options={{ gestureEnabled: false }}/>
                <Stack.Screen name="HomeScreen" component={BottomTab} options={{ gestureEnabled: false }}/>
            </Stack.Navigator>
        )
    }
}