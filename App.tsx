import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NativeStack from './src/navigator/Stack';
import CustomToast from './src/components/Toast/Toast';
import Toast from 'react-native-toast-message'
// import BottomTab from './src/navigator/BottomTab';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <NativeStack />
      <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} />
    </NavigationContainer>
  );
}

export default App;
