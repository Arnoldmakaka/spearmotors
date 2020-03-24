import React, {Component} from 'react';
import { View, Modal, Alert, KeyboardAvoidingView, TextInput, StyleSheet, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, Platform, StatusBar, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export const HomeScreen = ({navigation}) => { 
	const [modalVisible, setModalVisible] = React.useState(false);
	return(
		<SafeAreaView style={styles.container}>
			<View style={{flex: 1, backgroundColor: '#000000', justifyContent: 'center'}}>
				<ScrollView contentContainerStyle={styles.contentContainer} keyboardDismissMode="on-drag">
					<View style={{flex: 1, paddingHorizontal: 40, justifyContent: 'center',}}>
						<Modal
        					animationType="slide"
        					transparent={false}
        					visible={modalVisible}
        					onRequestClose={() => {
          						Alert.alert('Modal has been closed.');
        					}}>
        					<View style={{flex: 1, backgroundColor: '#000000', }}>
          						<View style={{flex: 1, backgroundColor: '#000000'}}>
									<ScrollView style={{flex: 1,}} contentContainerStyle={styles.contentContainer}>
        								<KeyboardAvoidingView style={{flex: 1,}} behavior="padding">
        									<View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 13,}}>
        										<View style={{justifyContent: 'center',}}>
        											<View style={{marginVertical: 10}}>
	        											<Text style={{color: '#fff', fontSize: 15, paddingBottom: 10,}}>How can we help you: </Text>
	        											<TextInput
	      													style={{textAlignVertical:"top", height: 140, padding: 10, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
	      													placeholder="Send us a message"
	      													multiline={true}
	    												/>
	    											</View>
	    										</View>	
	    										<View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between',}}>
						        					<TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}} style={{backgroundColor: '#fff', borderRadius: 4}}>
						    							<Text style={{color: '#000', textAlign: 'center', fontSize: 16, fontWeight: '800', paddingHorizontal: 40, paddingVertical: 10,}}>Cancel</Text>
						    						</TouchableOpacity>

						    						<TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}} style={{backgroundColor: '#fff', borderRadius: 4}}>
						    							<Text style={{color: '#000', textAlign: 'center', fontSize: 16, fontWeight: '800', paddingHorizontal: 40, paddingVertical: 10,}}>Submit</Text>
						    						</TouchableOpacity>
						        				</View>
        									</View>
        								</KeyboardAvoidingView>
        							</ScrollView>	
								</View>
        					</View>
      					</Modal> 

						<View style={{flex: 1, justifyContent: 'flex-end',}}>
							<View style={{marginVertical: 5, alignItems: 'center',}}>
								<View style={{height: 120, width: 120, borderRadius: 60, overflow: 'hidden', }}>
									<Image style={{height:'100%', width:'100%'}} source={require('../assets/images/robot-prod.png')} />
								</View>
							</View>
							<View style={{marginVertical: 8,}}>
								<Text style={{textAlign: 'center', fontSize: 16, color: '#fff',}}>Simon Peter Muwanguzi</Text>
								<Text style={{textAlign: 'center', fontSize: 11, color: '#fff',}}>smuwanuzi@ugandasoft.net</Text>
							</View>

							<View style={{backgroundColor: '#fff', width: '100%', height: 1, marginVertical: 7}}>
							</View>	
						</View>

						<View style={{flex: 1, justifyContent: 'flex-start',}}>
							<View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center',}}>
								<View style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 30, }}>
									<Ionicons name="ios-car" size={40} color="#fff" />
								</View>
								<TouchableOpacity onPress={() => navigation.push("AddCar")}>
									<Text style={{color: '#fff', fontSize: 14}}>+ Add Car</Text>
								</TouchableOpacity>
							</View>

							<View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center',}}>
								<View style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 30, }}>
									<Ionicons name="ios-cog" size={40} color="#fff" />
								</View>
								<TouchableOpacity onPress={() => navigation.push("RequestService")}>
									<Text style={{color: '#fff', fontSize: 15}}>+ Request for Service</Text>
								</TouchableOpacity>
							</View>

							<View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center',}}>
								<View style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 30, }}>
									<Ionicons name="ios-information" size={40} color="#fff" />
								</View>
								<TouchableOpacity onPress={() => navigation.push("Tip")}>
									<Text style={{color: '#fff', fontSize: 15}}>+ Tips on Car Maintanence</Text>
								</TouchableOpacity>
							</View>

							{/*<View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center',}}>
								<View style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 30, }}>
									<Ionicons name="ios-person" size={40} color="#fff" />
								</View>
								<TouchableOpacity onPress={() => alert}>
									<Text style={{color: '#fff', fontSize: 15}}>+ User Profile</Text>
								</TouchableOpacity>
							</View>*/}

							<View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center',}}>
								<View style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 30, }}>
									<Ionicons name="ios-help-circle" size={40} color="#fff" />
								</View>
								<TouchableOpacity onPress={() => {setModalVisible(true)}}>
									<Text style={{color: '#fff', fontSize: 15 }}>+ Help</Text>
								</TouchableOpacity>
							</View>
						</View>
				
					</View>
				</ScrollView>
			</View>		
		</SafeAreaView>
	);
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