import * as React from 'react';

import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import {AddCarScreen} from "../screens/AddCarScreen";
import {ServiceRequestScreen} from "../screens/ServiceRequestScreen";
import {TipScreen} from "../screens/TipScreen";
import ProfileScreen from "../screens/ProfileScreen";

const AppStack = createStackNavigator();

export const AppStackScreen = () => {
	return(
		<AppStack.Navigator headerMode="screen">
			<AppStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
			<AppStack.Screen name="AddCar" component={AddCarScreen} options={{headerTitleAlign: 'center', title: "Add new Car"}} />
			<AppStack.Screen name="Profile" component={ProfileScreen} options={{headerTitleAlign: 'center', title: "User Profile"}} />
			<AppStack.Screen name="RequestService" component={ServiceRequestScreen} options={{headerTitleAlign: 'center', title: "Request Service"}} />
			<AppStack.Screen name="Tip" component={TipScreen} options={{headerTitleAlign: 'center', title: "Car Maintenance"}} />
		</AppStack.Navigator>
	);
}