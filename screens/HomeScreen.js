import React, {Component} from 'react';
import { View, Modal, Alert, AsyncStorage, ImageBackground, KeyboardAvoidingView, TextInput, StyleSheet, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, Platform, StatusBar, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from "firebase";


export default class HomeScreen extends Component  { 

	constructor(props){
		super()
		this.state={
			modalVisible: false,
			setModalVisible: false,
			message: '',
			email: '',
			name: '',
			pic: ''
		}
	}

	componentDidMount() {
		let user = firebase.auth().currentUser;
		console.log(JSON.stringify(user))
		this.setState({
			name: user.displayName,
			email: user.email
		})
		AsyncStorage.getItem("@key_profilepic").then((r)=>{
  			var userpic = JSON.parse(r)
		    this.setState({pic: userpic.userdp})
		})
	}

	mymodal = () => {
		let {setModalVisible, modalVisible} = this.state
		this.setState({
			modalVisible: true
		})
	}

	openPickerAsync = async () => {
    	let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    	if (permissionResult.granted === false) {
      		console.log('Permission to access camera roll is required!');
      		return;
    	}
    	let pickerResult = await ImagePicker.launchImageLibraryAsync();
    	if (pickerResult.cancelled === true) {
      		return;
    	}
    	this.setState({
    		pic: pickerResult.uri
    	})
    	var userpic = {
    		userdp: this.state.pic
    	}
    	try {
          	await AsyncStorage.setItem('@key_profilepic', JSON.stringify(userpic));
          		console.log("user pic saved")
        }catch (error) {
          	Alert.alert("Saving Information", error);
       	}
  	};

	onsubmitmessage = () => {
		let {message, email, name} = this.state
		if (this.state.message != ''){
			let newid = name+"help";
			//alert(newid)
			firebase.database().ref('HelpLineMessage/' + newid).push({
				helpMessage: message,
				Email: email,
				Name: name
			}).then(() => {
            		this.setState({
						modalVisible: false
					});
          		})
          		.catch((err) => {
            		Alert.alert("Network Error", err);
        		});
    	} else {
			Alert.alert("Invalid Message", "Please type something in the textbox")
		}
	}

	render(){
		let {setModalVisible, message, name, pic, email, modalVisible} = this.state
		return(
		<SafeAreaView style={styles.container}>
			<View style={{flex: 1, backgroundColor: '#000000', justifyContent: 'center'}}>
				<ScrollView contentContainerStyle={styles.contentContainer} keyboardDismissMode="on-drag">
					<View style={{flex: 1, paddingHorizontal: 40, justifyContent: 'center',}}>
						<Modal
        					animationType="slide"
        					transparent={false}
        					visible={this.state.modalVisible}
        					onRequestClose={() => {
          						Alert.alert('Spear Motors help line canceled');
        					}}>
        					<View style={{flex: 1, backgroundColor: '#000000', }}>
          						<View style={{flex: 1, backgroundColor: '#000000'}}>
									<ScrollView style={{flex: 1,}} contentContainerStyle={styles.contentContainer}>
        								
        									<View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 13,}}>
        										<View style={{justifyContent: 'center', marginBottom: 10,}}>
        											<View style={{marginVertical: 10}}>
	        											<Text style={{color: '#fff', fontSize: 16, marginTop: 5, paddingBottom: 12,}}>How can we help you: </Text>
	        											<TextInput
	      													style={{textAlignVertical:"top", fontSize: 14, height: 150, padding: 12, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
	      													placeholder="Send us a message"
	      													multiline={true}
	      													keyboardType = 'default' 
	      													onChangeText={(message)=>this.setState({message})}
	    												/>

	    											</View>
	    										</View>	
	    										<View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between',}}>
						        					<TouchableOpacity onPress={() => {this.setState({modalVisible: false})}} style={{backgroundColor: '#fff', borderRadius: 4}}>
						    							<Text style={{color: '#000', textAlign: 'center', fontSize: 16, fontWeight: '800', paddingHorizontal: 40, paddingVertical: 10,}}>Cancel</Text>
						    						</TouchableOpacity>

						    						<TouchableOpacity onPress={this.onsubmitmessage} style={{backgroundColor: '#fff', borderRadius: 4}}>
						    							<Text style={{color: '#000', textAlign: 'center', fontSize: 16, fontWeight: '800', paddingHorizontal: 40, paddingVertical: 10,}}>Submit</Text>
						    						</TouchableOpacity>
						        				</View>
        									</View>
        								
        							</ScrollView>	
								</View>
        					</View>
      					</Modal> 

						<View style={{flex: 1, justifyContent: 'flex-end', overflow: 'hidden', }}>
							<View style={{flexDirection: 'row',  marginVertical: 5, justifyContent: 'center', alignItems: 'flex-end', }}>
								<View style={{height: 130,  width: 130, borderRadius: 65, overflow: 'hidden', borderWidth: 2, borderColor: '#000' }}>
									{pic ? (
	                						<Image source={{ uri: pic }} style={{height:'100%', width:'100%'}}/>
										) : (
											<Image source={require('../assets/images/no-img.png')} style={{height:'100%', width:'100%'}}/>
	                					)
									}
								</View>
								<TouchableOpacity onPress={this.openPickerAsync} style={{height: 25, width: 25, justifyContent: 'center', alignItems: 'flex-start', overflow: 'hidden',}}>
								<Ionicons name="ios-camera" size={26} color="#fff" />
							</TouchableOpacity>
							</View>
							
							<View style={{marginVertical: 8,}}>
								<Text style={{textAlign: 'center', fontSize: 16, color: '#fff',}}>{name}</Text>
								<Text style={{textAlign: 'center', fontSize: 13, color: '#fff',}}>{email}</Text>
							</View>

							<View style={{backgroundColor: '#fff', width: '100%', height: 2, marginBottom: 10}}>
							</View>	
						</View>

						<View style={{flex: 1, justifyContent: 'flex-start',}}>
							<View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center',}}>
								<View style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 25, }}>
									<Ionicons name="ios-car" size={40} color="#fff" />
								</View>
								<TouchableOpacity onPress={() => this.props.navigation.push("AddCar")}>
									<Text style={{color: '#fff', fontSize: 16}}>+ Add Car</Text>
								</TouchableOpacity>
							</View>

							<View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center',}}>
								<View style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 25, }}>
									<Ionicons name="ios-cog" size={40} color="#fff" />
								</View>
								<TouchableOpacity onPress={() => this.props.navigation.push("RequestService")}>
									<Text style={{color: '#fff', fontSize: 16}}>+ Request for Service</Text>
								</TouchableOpacity>
							</View>

							<View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center',}}>
								<View style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 25, }}>
									<Ionicons name="ios-person" size={40} color="#fff" />
								</View>
								<TouchableOpacity onPress={() => this.props.navigation.push("Profile")}>
									<Text style={{color: '#fff', fontSize: 16}}>+ User Profile</Text>
								</TouchableOpacity>
							</View>

							<View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center',}}>
								<View style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 25, }}>
									<Ionicons name="ios-information" size={40} color="#fff" />
								</View>
								<TouchableOpacity onPress={() => this.props.navigation.push("Tip")}>
									<Text style={{color: '#fff', fontSize: 16}}>+ Tips on Car Maintanence</Text>
								</TouchableOpacity>
							</View>

							<View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center',}}>
								<View style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 25, }}>
									<Ionicons name="ios-help-circle" size={40} color="#fff" />
								</View>
								<TouchableOpacity onPress={this.mymodal}>
									<Text style={{color: '#fff', fontSize: 16 }}>+ Help</Text>
								</TouchableOpacity>
							</View>
						</View>
				
					</View>
				</ScrollView>
			</View>		
		</SafeAreaView>
	);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000', 
		justifyContent: 'center',
	},
	contentContainer:{
		flex: 1,
		justifyContent: 'center'
	}
})