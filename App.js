import * as React from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Platform, StatusBar, Button} from 'react-native';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import {AuthStackScreen} from './navigation/AuthNavigation';
//import {DrawerNavigatorScreen} from './navigation/DrawerNavigation';
import {AppStackScreen} from './navigation/AppNavigation';

//
import {AuthContext} from './context';

const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => {
	return(
		<RootStack.Navigator headerMode="none">
			{userToken ? (
				<RootStack.Screen name="App" component={AppStackScreen} options={{animationEnabled: false}} />	
			) : (
				//<RootStack.Screen name="App" component={DrawerNavigatorScreen}/>
				<RootStack.Screen name="App" component={AppStackScreen} options={{animationEnabled: false}} />
				//<RootStack.Screen name="Auth" component={AuthStackScreen} options={{animationEnabled: false}} />
			)}
		</RootStack.Navigator>
	);
}

export default () => {

	const [isLoading, setIsLoading] = React.useState(true);
	const [userToken, setUserToken] = React.useState(null);

	const authContext = React.useMemo(() => {
		return {
			signIn: () => {
				setIsLoading(false);
				setUserToken("boom");	
			},
			signUp: () => {
				setIsLoading(false);
				setUserToken("boom");	
			},
			signOut: () => {
				setIsLoading(false);
				setUserToken(null);	
			},
			passwordReset: (email) => {
  				return firebase.auth().sendPasswordResetEmail(email)
			},
		};
	}, []);

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	if(isLoading){
		return(
			<View style={{flex: 1, justifyContent: 'center', backgroundColor: '#000000', alignItems: 'center',}}>
				<ActivityIndicator size="large" color="#fff" />
			</View>
		);
	}

	return(
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<RootStackScreen userToken={userToken} />
			</NavigationContainer>
		</AuthContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',  
	}
})