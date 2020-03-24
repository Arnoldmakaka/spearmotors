import * as React from 'react';

//navigation
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {LoginScreen} from '../screens/LoginScreen';
import {SignupScreen} from '../screens/SignupScreen';
import {ForgotPassword} from '../screens/ForgotPassword';

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => {
	return(
		<AuthStack.Navigator>
			<AuthStack.Screen name="Login" component={LoginScreen} options={{ title: "Login"}} />
			<AuthStack.Screen name="Signup" component={SignupScreen} options={{ title: "Sign up"}} />
			<AuthStack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: "Forgot Password"}} />
		</AuthStack.Navigator>
	);
}