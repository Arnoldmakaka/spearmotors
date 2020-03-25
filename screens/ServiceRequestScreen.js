import React, {Component} from 'react';
import { View, Picker, StyleSheet, Text, Platform, TouchableOpacity, ScrollView, KeyboardAvoidingView, StatusBar, Button, TextInput} from 'react-native';


export const ServiceRequestScreen = ({navigation}) => {
	const [pickvalue, setpickvalue] = React.useState("");

	const showpickvalue = (value) => {
    	setpickvalue(value);
  	};

	return(
		<View style={{flex: 1, backgroundColor: '#000000'}}>
			<ScrollView style={{flex: 1,}} contentContainerStyle={styles.contentContainer}>
        		<KeyboardAvoidingView style={{flex: 1,}} behavior="padding">
        			<View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 13,}}>
        				
        				<View style={{flex: 1, }}>
        					<Text style={{color: '#fff', fontSize: 14,}}>Service to request: </Text>
        					<View style={{marginVertical: 10, backgroundColor: '#fff', borderRadius: 4,}}>
        						<Picker selectedValue = {pickvalue} onValueChange = {showpickvalue}>
					               <Picker.Item label = "Car Service" value = "Car Service" />
					               <Picker.Item label = "Repair of shocks" value = "Repair of shocks" />
					               <Picker.Item label = "Other" value = "Other" />
					            </Picker>
        					</View>

	        				<View style={{marginVertical: 10}}>
	        					<Text style={{color: '#fff', fontSize: 14, paddingBottom: 5,}}>Description: </Text>
	        					<TextInput
	      							style={{textAlignVertical:"top", height: 140, padding: 10, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
	      							placeholder="Please enter your description"
	      							multiline={true}
	    						/>
	    					</View>
	    				</View>	

        				<View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between',}}>
        					<TouchableOpacity onPress={() => navigation.navigate("Home")} style={{backgroundColor: '#fff', borderRadius: 4}}>
    							<Text style={{color: '#000', textAlign: 'center', fontSize: 16, fontWeight: '800', paddingHorizontal: 40, paddingVertical: 10,}}>Cancel</Text>
    						</TouchableOpacity>

    						<TouchableOpacity onPress={() => navigation.navigate("Home")} style={{backgroundColor: '#fff', borderRadius: 4}}>
    							<Text style={{color: '#000', textAlign: 'center', fontSize: 16, fontWeight: '800', paddingHorizontal: 40, paddingVertical: 10,}}>Submit</Text>
    						</TouchableOpacity>
        				</View>

        			</View>
        		</KeyboardAvoidingView>
        	</ScrollView>	
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

