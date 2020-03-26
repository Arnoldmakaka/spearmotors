import React, {Component} from 'react';
import {Platform, ActivityIndicator, AsyncStorage, YellowBox, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from "firebase";

export default class ProfileScreen extends Component{

	constructor(props) {
    	super(props);
    	this.state = {
      		loading: false,
      		message: '',
      		title: '',
      		name: '',
      		address: '',
      		pcontact: '',
      		email: '',
    	}
  	}

  	componentDidMount(){
  		let user = firebase.auth().currentUser;
  		this.setState({
			name: user.displayName,
			email: user.email
		})
		//alert(this.state.name)
  		AsyncStorage.getItem("@key_userinfo").then((r)=>{
  			let retrieveduserinfo = JSON.parse(r)
  			//alert(JSON.stringify(user))
		    this.setState({
		    	address: retrieveduserinfo.useraddress,
      			pcontact: retrieveduserinfo.phonenumber,
      			title: retrieveduserinfo.usertitle
		    })
    	}) 
  	}

  	onSave = async () => {
  		let {title, name, address, pcontact, email, loading, message} = this.state;
  		let user = firebase.auth().currentUser
  		if(name != "" && title != "" && address != "" && pcontact != "" ){
	  		this.setState({
		        loading:true,
		       	message: ''
		    })
		    let userData = {
      			useraddress: address,
      			phonenumber: pcontact,
      			usertitle: title    
    		}
    		user.updateProfile({
    			displayName: name,
    			email: email
    		})
    		try {
      			await AsyncStorage.setItem('@key_userinfo', JSON.stringify(userData));
        			this.props.navigation.navigate("Home");
    		}catch (err) {
        		console.log("Saving Information", error);
        		this.setState({
		        	loading: false,
		       		message: err.message
		    	})
    		}
	  	}else{
      		Alert.alert("Missing Fields", "Please fill in all the required fields!!!")
    	}
  	}

	render(){
		let {title, name, address, pcontact, email, loading, message} = this.state;
		return(
			<View style={{flex: 1, backgroundColor: '#000000'}}>
				<ScrollView style={{flex: 1,}} contentContainerStyle={styles.contentContainer}>
        			<KeyboardAvoidingView style={{flex: 1,}} behavior="padding" enabled>
        				<View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 5,}}>
        					<View style={{flex: 1, justifyContent: 'center', marginVertical: 0,}}>
                				{loading ? <ActivityIndicator color="#fff" /> : <Text style={{color: '#fff', textAlign: 'center', paddingVertical: 5 }}>{message}</Text>}
                			</View>
        					<View style={{marginVertical: 3}}>
        						<Text style={{color: '#fff', fontSize: 12, paddingBottom: 5,}}>User Title: </Text>
          						<TextInput
        							style={{ height: 40, padding: 10, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
        							placeholder="My title"
        							onChangeText={(title)=>this.setState({title})} returnKeyType='next'
      							>{title}</TextInput>
      						</View>

      						<View style={{marginVertical: 3}}>
        						<Text style={{color: '#fff', fontSize: 12, paddingBottom: 5,}}>User Name: </Text>
          						<TextInput
        							style={{ height: 40, padding: 10, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
        							placeholder="My user name"
        							onChangeText={(name)=>this.setState({name})} returnKeyType='next'
      							>{name}</TextInput>
      						</View>

      						<View style={{marginVertical: 3}}>
        						<Text style={{color: '#fff', fontSize: 12, paddingBottom: 5,}}>User Email: </Text>
          						<TextInput
        							style={{ height: 40, padding: 10, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
        							placeholder="User email"
        							keyboardType = 'email-address'
        							onChangeText={(email)=>this.setState({email})} returnKeyType='next'
      							>{email}</TextInput>
      						</View>

      						<View style={{marginVertical: 3}}>
        						<Text style={{color: '#fff', fontSize: 12, paddingBottom: 5,}}>Phone Number: </Text>
          						<TextInput
        							style={{ height: 40, padding: 10, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
        							placeholder="My phone number"
        							keyboardType = 'phone-pad'
        							onChangeText={(pcontact)=>this.setState({pcontact})} returnKeyType='next'
      							>{pcontact}</TextInput>
      						</View>

      						<View style={{marginVertical: 3}}>
        						<Text style={{color: '#fff', fontSize: 12, paddingBottom: 5,}}>User Address: </Text>
          						<TextInput
        							style={{ height: 40, padding: 10, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
        							placeholder="My address"
        							onChangeText={(address)=>this.setState({address})} returnKeyType='next'
      							>{address}</TextInput>
      						</View>

      						<View style={{marginTop: 30,}}>
      							<TouchableOpacity onPress={this.onSave} style={{backgroundColor: '#fff', borderRadius: 4}}>
      								<Text style={{color: '#000', textAlign: 'center', fontSize: 16, fontWeight: '800', paddingVertical: 10,}}>Save</Text>
      							</TouchableOpacity>
      						</View>

        				</View>
        			</KeyboardAvoidingView>
        		</ScrollView>	
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