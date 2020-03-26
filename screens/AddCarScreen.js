import React, {Component, useState} from 'react';
import { View, Alert, StyleSheet, Image, Text, Platform, TouchableOpacity, ScrollView, KeyboardAvoidingView, StatusBar, Button, TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DatePicker from 'react-native-datepicker';
import * as firebase from "firebase";

var moment = require('moment');

let mydate = moment().format("Do/MM/YYYY")

export default class AddCarScreen extends Component  { 

  constructor(props){
    super()
    this.state={
      loading: false,
      message: '',
      frontImage: null,
      rearImage: null,
      leftImage: null,
      rightImage: null,
      manufacdate: mydate,
      cnumber: "",
      cnumplate: "",
      cbrand: ""
    }
  }

  openFrontImagePickerAsync = async () => {
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
      frontImage: pickerResult.uri
    })
    console.log(pickerResult)
  };

  openRearImagePickerAsync = async () => {
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
      rearImage: pickerResult.uri
    })
  };

  openLeftImagePickerAsync = async () => {
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
      leftImage: pickerResult.uri
    })
  };

  openRightImagePickerAsync = async () => {
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
      rightImage: pickerResult.uri
    })
  };

  onSave = async () => {
    let {frontImage, rearImage, leftImage, cnumber, cbrand, cnumplate, rightImage, loading, message} = this.state
    if(cnumber != "" && cbrand != "" && cnumplate != ""){
      if(frontImage != null && rearImage != null){
        this.props.navigation.navigate("Home")
      }else{
        Alert.alert("Missing Images", "Take at least the front and rear pictures of your car")
      }
    }else{
      Alert.alert("Missing Fields", "Please fill in all the required fields!!!")
    }
  }

  render(){
    let {frontImage, rearImage, leftImage, cnumber, cbrand, cnumplate, rightImage, loading, message} = this.state
  	return(
  		<View style={{flex: 1, backgroundColor: '#000000'}}>
        <ScrollView style={{flex: 1,}} contentContainerStyle={styles.contentContainer}>
              <KeyboardAvoidingView style={{flex: 1,}} behavior="padding">
                <View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 5,}}>
                  <View style={{flex: 1, justifyContent: 'center', marginVertical: 0,}}>
                    {loading ? <ActivityIndicator color="#fff" /> : <Text style={{color: '#fff', textAlign: 'center', paddingVertical: 5 }}>{message}</Text>}
                  </View>
          				
          				<View style={{marginVertical: 3}}>
          					<Text style={{color: '#fff', fontSize: 12, paddingBottom: 5,}}>Chassis Number: </Text>
          					<TextInput
        							style={{ height: 40, padding: 10, borderColor: 'gray', borderWidth: 0, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
        							placeholder="Please enter your chasis number"
                      onChangeText={(cnumber)=>this.setState({cnumber})}
      						  />
      					  </View>

      					<View style={{marginVertical: 3}}>
          					<Text style={{color: '#fff', fontSize: 12, paddingBottom: 5,}}>Car Brand: </Text>
          					<TextInput
        							style={{ height: 40, padding: 10, borderColor: 'gray', borderWidth: 0, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
        							placeholder="Please enter the brand of your car"
                      onChangeText={(cbrand)=>this.setState({cbrand})}
      						/>
      					</View>

      					<View style={{marginVertical: 3}}>
          					<Text style={{color: '#fff', fontSize: 12, paddingBottom: 5,}}>Car Number Plate: </Text>
          					<TextInput
        							style={{ height: 40, padding: 10, borderColor: 'gray', borderWidth: 0, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
        							placeholder="Please enter your car number plate"
                      onChangeText={(cnumplate)=>this.setState({cnumplate})}
      						/>
      					</View>

      					<View style={{marginVertical: 3}}>
                  <Text style={{color: '#fff', fontSize: 12, paddingBottom: 5,}}>Year of Manufacture: </Text>
                  <DatePicker
                    style={{ width: 200 }}
                    date={this.state.manufacdate} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="select date"
                    format="DD/MM/YYYY"
                    minDate="20/09/1997"
                    maxDate="20/09/2070"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                        backgroundColor: '#fff',
                        borderRadius: 4,
                        borderWidth: 0
                      },
                    }}
                    onDateChange={date => {
                      this.setState({ manufacdate: date });
                    }}
                  />   
      					</View>

      					<View style={{marginVertical: 3}}>
          					<Text style={{color: '#fff', fontSize: 12, paddingBottom: 5,}}>Select pictures of your car: </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5,}}>
                      <View>
                        <TouchableOpacity onPress={this.openFrontImagePickerAsync} style={{backgroundColor: '#fff', borderRadius: 4}}>
                          <Text style={{color: '#000', textAlign: 'center', fontSize: 12, fontWeight: '800', padding: 5,}}>Front View</Text>
                        </TouchableOpacity>
                        {frontImage !== null && 
                          <View style={{alignItems: 'center', justifyContent: 'center',}}>
                            <Image source={{ uri: frontImage }} style={styles.thumbnail}/>
                          </View>
                        }
                      </View>

                      <View>
                        <TouchableOpacity onPress={this.openRearImagePickerAsync} style={{backgroundColor: '#fff', borderRadius: 4}}>
                          <Text style={{color: '#000', textAlign: 'center', fontSize: 12, fontWeight: '800', padding: 5,}}>Rear View</Text>
                        </TouchableOpacity>
                        {rearImage !== null && 
                          <View style={{alignItems: 'center', justifyContent: 'center',}}>
                            <Image source={{ uri: rearImage }} style={styles.thumbnail}/>
                          </View>
                        }
                      </View>  
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5,}}>
                      <View>
                        <TouchableOpacity onPress={this.openLeftImagePickerAsync} style={{backgroundColor: '#fff', borderRadius: 4}}>
                          <Text style={{color: '#000', textAlign: 'center', fontSize: 12, fontWeight: '800', padding: 5,}}>Side View</Text>
                        </TouchableOpacity>
                        {leftImage !== null && 
                          <View style={{alignItems: 'center', justifyContent: 'center',}}>
                            <Image source={{ uri: leftImage }} style={styles.thumbnail}/>
                          </View>
                        }
                      </View>

                      <View>
                        <TouchableOpacity onPress={this.openRightImagePickerAsync} style={{backgroundColor: '#fff', borderRadius: 4}}>
                          <Text style={{color: '#000', textAlign: 'center', fontSize: 12, fontWeight: '800', padding: 5,}}>Side View</Text>
                        </TouchableOpacity>
                        {rightImage !== null && 
                          <View style={{alignItems: 'center', justifyContent: 'center',}}>
                            <Image source={{ uri: rightImage }} style={styles.thumbnail}/>
                          </View>
                        }
                      </View>  
                    </View>
      					</View>

      					<View style={{marginVertical: 10,}}>
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
  },
  thumbnail: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 4,
  },
})