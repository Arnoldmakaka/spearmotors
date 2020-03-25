import React, {Component} from 'react';
import { View, StyleSheet, Text, Platform, StatusBar, Button} from 'react-native';


export default class ProfileScreen extends Component{

	render(){
		return(
			<View style={{flex: 1, backgroundColor: '#000000',}}>
				<Text style={{color: '#fff'}}>jhsd</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',  
	}
})