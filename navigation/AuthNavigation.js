import * as React from 'react';

//navigation
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPassword from '../screens/ForgotPassword';

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => {
	return(
		<AuthStack.Navigator>
			<AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
			<AuthStack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false}} />
			<AuthStack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false}} />
		</AuthStack.Navigator>
	);
}