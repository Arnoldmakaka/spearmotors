import React, {Component} from 'react';
import { View, StyleSheet, Text, Platform, StatusBar, Button} from 'react-native';

//
import {AuthContext} from '../context';

export const ProfileScreen = ({navigation}) => {
	const {signOut} = React.useContext(AuthContext);
	return(
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
			<Text style={{textAlign: 'center', fontSize: 20,}}>ProfileScreen</Text>
			<Button title="sign out" onPress={() => signOut()} />
		</View>
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