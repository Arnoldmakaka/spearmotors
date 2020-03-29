import React, {Component} from 'react';
import { View, Picker, Modal, ActivityIndicator, Alert, AsyncStorage, ImageBackground, KeyboardAvoidingView, TextInput, StyleSheet, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, Platform, StatusBar, Button} from 'react-native';
import * as firebase from "firebase";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class ServiceRequestScreen extends Component  {

	constructor(props){
		super()
		this.state={
			pickvalue: "Car Service",
			description: "",
			name: "",
			eamil: "",
			loading: false,
			message: ''
		}
	}

	componentDidMount() {
		let user = firebase.auth().currentUser;
		this.setState({
			name: user.displayName,
			email: user.email
		})
	}

	showpickvalue = (value) => {
		this.setState({
			pickvalue: value
		})
	}

	onSubmit = () => {
		let {pickvalue, description, name, email} = this.state
		if(description != ""){
			this.setState({
	        	loading:true,
	        	message: ''
	      	})
			let newid = "Service/"+name;
			firebase.database().ref('DescriptionMessage/' + newid).push({
				DescriptionMessage: description,
				Email: email,
				Name: name,
				Service: pickvalue
			}).then(() => {
				this.props.navigation.navigate("Home")
			}).catch((err) => {
            		console.log(err)
            		this.setState({
	          			loading:false,
	          			message: err.message
	        		})
        		});
		} else{
			Alert.alert("Invalid Description", "Please enter a valid description")
		}
		
	}

	render(){
		let {pickvalue, description, message, loading} = this.state
		return(
			<View style={{flex: 1, backgroundColor: '#000000'}}>
				<ScrollView style={{flex: 1,}} contentContainerStyle={styles.contentContainer}>
	        		<KeyboardAwareScrollView style={{flex: 1,}}>
	        			<View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 10,}}>
	        				
	        				<View style={{flex: 1, }}>
	        					<Text style={{color: '#fff', fontSize: 15,}}>Service to request: </Text>
	        					<View style={{marginVertical: 5, backgroundColor: '#fff', borderRadius: 4,}}>
	        						<Picker selectedValue = {pickvalue} onValueChange = {this.showpickvalue}>
						               <Picker.Item label = "Car Service" value = "Car Service" />
						               <Picker.Item label = "Repair of shocks" value = "Repair of shocks" />
						               <Picker.Item label = "Other" value = "Other" />
						            </Picker>
	        					</View>

		        				<View style={{marginVertical: 5}}>
		        					<Text style={{color: '#fff', fontSize: 15, marginTop: 5, paddingBottom: 8,}}>Description: </Text>
		    						<TextInput
	      								style={{textAlignVertical:"top", fontSize: 14, height: 120, padding: 10, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
	      								placeholder="Please enter your description"
	      								multiline={true}
	      								keyboardType = 'default' 
	      								onChangeText={(description)=>this.setState({description})}
	    							/>
		    					</View>
		    				</View>	

	        				<View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between',}}>
	        					<TouchableOpacity onPress={() => this.props.navigation.navigate("Home")} style={{backgroundColor: '#fff', borderRadius: 4}}>
	    							<Text style={{color: '#000', textAlign: 'center', fontSize: 16, fontWeight: '800', paddingHorizontal: 40, paddingVertical: 10,}}>Cancel</Text>
	    						</TouchableOpacity>

	    						<TouchableOpacity onPress={this.onSubmit} style={{backgroundColor: '#fff', borderRadius: 4}}>
	    							<Text style={{color: '#000', textAlign: 'center', fontSize: 16, fontWeight: '800', paddingHorizontal: 40, paddingVertical: 10,}}>Submit</Text>
	    						</TouchableOpacity>
	        				</View>

	        				<View style={{flex: 1, justifyContent: 'center', marginVertical: 30,}}>
                				{loading ? <ActivityIndicator color="#fff" /> : <Text style={{color: '#fff', textAlign: 'center', paddingVertical: 15 }}>{message}</Text>}
                			</View>

	        			</View>
	        		</KeyboardAwareScrollView>
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

