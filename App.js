import * as React from 'react';
import { View, StyleSheet, ActivityIndicator, Image, Text, Platform, StatusBar, Button} from 'react-native';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import {AuthStackScreen} from './navigation/AuthNavigation';
//import {DrawerNavigatorScreen} from './navigation/DrawerNavigation';
import {AppStackScreen} from './navigation/AppNavigation';

//
import {AuthContext} from './context';
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5rh-a82gm5HtCjJK3uXZ8YqWSBsRnfaE",
  authDomain: "myhack-cc52b.firebaseapp.com",
  databaseURL: "https://myhack-cc52b.firebaseio.com",
  projectId: "myhack-cc52b",
  storageBucket: "myhack-cc52b.appspot.com",
  messagingSenderId: "642183315013",
  appId: "1:642183315013:web:40160351295154637b6d2c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const RootStack = createStackNavigator();
//const RootStackScreen = ({userToken}) => {
	
export default () => {

	const [initializing, setInitializing] = React.useState(true)
  	const [user, setUser] = React.useState(null)

	// Handle user state changes
  	function onAuthStateChanged(result) {
    	setUser(result)
    		if (initializing){
    			setInitializing(false)
    		}
  		}

	React.useEffect(() => {
		const authSubscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
		// unsubscribe on unmount
    	return authSubscriber
		/*setTimeout(() => {
			setInitializing(false);
		}, 2000);*/
	}, []);

	if(initializing){
		return(
			<View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 20, backgroundColor: '#000000', alignItems: 'center',}}>
				<View style={{height: 140, width: 140, borderRadius: 70, overflow: 'hidden', marginVertical: 10, }}>
					<Image style={{height:'100%', width:'100%'}} source={require('./assets/images/mercedes-benz.png')} />
				</View>
				<Text style={{color: '#fff', fontSize: 14, textAlign: 'center', paddingVertical: 20, }}>Welcome to Spear Motors for your Mercedes Benz Care</Text>
				<ActivityIndicator size="large" color="#fff" />
			</View>
		);
	}

	return(
		<NavigationContainer>
			<RootStack.Navigator headerMode="none">
				{user ? (
					<RootStack.Screen name="App" component={AppStackScreen} options={{animationEnabled: false}} />
						
				) : (
					<RootStack.Screen name="Auth" component={AuthStackScreen} options={{animationEnabled: false}} />
				)}
			</RootStack.Navigator>
		</NavigationContainer>
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