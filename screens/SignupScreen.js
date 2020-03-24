import React, {Component} from 'react';
import { View, Button, StyleSheet, Text, Platform, StatusBar} from 'react-native';

//
import {AuthContext} from '../context';

export const SignupScreen = ({navigation}) => {
	const {signUp} = React.useContext(AuthContext);
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text style={{fontSize: 24, textAlign: 'center', marginVertical: 10}}>SignupScreen</Text>
      <Button title="SignupScreen" onPress={() => signUp()} />
    </View>
  );
}

/*export const SignupScreen = ({navigation}) => {
	return(
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',  
	}
})*/