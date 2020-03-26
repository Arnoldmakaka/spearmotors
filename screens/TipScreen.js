import React, {Component} from 'react';
import { View, StyleSheet, Text, Platform, TouchableOpacity, ScrollView, KeyboardAvoidingView, StatusBar, Button, TextInput} from 'react-native';


export const TipScreen = ({navigation}) => {
	return(
		<View style={{flex: 1, backgroundColor: '#000000'}}>
			<ScrollView style={{flex: 1,}} contentContainerStyle={styles.contentContainer}>
        		<KeyboardAvoidingView style={{flex: 1,}} behavior="padding">
        			<View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 13,}}>
        				<Text style={{color: '#fff', textAlign: 'center', fontSize: 17, marginBottom: 7, }}>How to maintain your car</Text>
        				<View style={{width: '100%', marginVertical: 10, backgroundColor: '#fff', paddingVertical: 7, paddingHorizontal: 7, borderRadius: 4,}}>
        					<Text style={{color: '#000', textAlign: 'left', fontSize: 16, fontWeight: '700',}}>1. Check tire pressure</Text>
        					<Text style={{fontSize: 14, textAlign: 'justify', color: '#000' }}>
        						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        					</Text>
        				</View>
        				<View style={{width: '100%', marginVertical: 10, backgroundColor: '#fff', paddingVertical: 7, paddingHorizontal: 7, borderRadius: 4,}}>
        					<Text style={{color: '#000', textAlign: 'left', fontSize: 16, fontWeight: '700',}}>2. Do service on time</Text>
        					<Text style={{fontSize: 14, textAlign: 'justify', color: '#000' }}>
        						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        					</Text>
        				</View>

        				<View style={{width: '100%', marginVertical: 10, backgroundColor: '#fff', paddingVertical: 7, paddingHorizontal: 7, borderRadius: 4,}}>
        					<Text style={{color: '#000', textAlign: 'left', fontSize: 16, fontWeight: '700',}}>3. Check the fuel tank daily</Text>
        					<Text style={{fontSize: 14, textAlign: 'justify', color: '#000' }}>
        						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        					</Text>
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