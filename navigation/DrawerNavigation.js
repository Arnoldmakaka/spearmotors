import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {AppStackScreen} from './AppNavigation';
import {ProfileScreen} from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorScreen = () => {
	return(
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="AppStack">
				<Drawer.Screen name="AppStack" component={AppStackScreen} />
				<Drawer.Screen name="Profile" component={ProfileScreen} />
			</Drawer.Navigator>
		</NavigationContainer>	
	);	
}