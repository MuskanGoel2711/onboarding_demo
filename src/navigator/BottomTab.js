import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Detail from '../navigator/components/Detail';
import Setting from '../navigator/components/Setting';
import LogOut from '../navigator/components/LogOut';
import {icons} from '../assets/index';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default class BottomTab extends React.Component {
    loginButton = () => {
        this.props.navigation.navigate('Login')
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        })
    }
    render() {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "HOME",
                        tabBarIcon: ({ size, focused, color }) => {
                            return (
                                <Image
                                    style={{ width: size, height: size }}
                                    source={icons.Home}
                                />
                            );
                        },
                    }} />

                <Tab.Screen
                    name="Account"
                    component={LogOut}
                    options={({ navigation, size, color }) => ({
                        title: 'LOGOUT',
                        tabBarIcon: (props) => (
                            <TouchableOpacity onPress={this.loginButton}>
                                <Image
                                    style={{ width: 25, height: 25 }}
                                    source={icons.Account}
                                />
                            </TouchableOpacity>
                        ),

                    })}
                />
                <Tab.Screen
                    name="Favourites"
                    component={Setting}
                    options={{
                        title: 'SETTING',
                        tabBarIcon: ({ size, focused, color }) => {
                            return (
                                <Image
                                    style={{ width: size, height: size }}
                                    source={icons.Favourites}
                                />
                            );
                        },
                    }} />
                <Tab.Screen
                    name="Menu"
                    component={Detail}
                    options={{
                        title: 'DETAIL',
                        tabBarIcon: ({ size, focused, color }) => {
                            return (
                                <Image
                                    style={{ width: size, height: size }}
                                    source={icons.HomeMenu}
                                />
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        )
    }
}
