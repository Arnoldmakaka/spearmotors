import React, {Component, useState} from 'react';
import { View, StyleSheet, Image, Text, Platform, TouchableOpacity, ScrollView, KeyboardAvoidingView, StatusBar, Button, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
var moment = require('moment');

export const AddCarScreen = ({navigation}) => {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const[frontImage, setFrontImage] = useState(null);
  const[rearImage, setRearImage] = useState(null);
  const[leftImage, setLeftImage] = useState(null);
  const[rightImage, setRightImage] = useState(null);

  const openFrontImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      console.log('Permission to access camera roll is required!');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setFrontImage({ localUri: pickerResult.uri });
    console.log(pickerResult)
  };

  const openRearImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      console.log('Permission to access camera roll is required!');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setRearImage({ localUri: pickerResult.uri });
  };

  const openLeftImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      console.log('Permission to access camera roll is required!');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setLeftImage({ localUri: pickerResult.uri });
  };

  const openRightImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      console.log('Permission to access camera roll is required!');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setRightImage({ localUri: pickerResult.uri });
  };


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    alert(date);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };


	return(
		<View style={{flex: 1, backgroundColor: '#000000'}}>
      <ScrollView style={{flex: 1,}} contentContainerStyle={styles.contentContainer}>
            <KeyboardAvoidingView style={{flex: 1,}} behavior="padding">
              <View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 13,}}>
        				
        				<View style={{marginVertical: 7}}>
        					<Text style={{color: '#fff', fontSize: 14, paddingBottom: 5,}}>Chassis Number: </Text>
        					<TextInput
      							style={{ height: 50, padding: 10, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
      							placeholder="Please enter your chasis number"
    						/>
    					</View>

    					<View style={{marginVertical: 7}}>
        					<Text style={{color: '#fff', fontSize: 14, paddingBottom: 5,}}>Car Brand: </Text>
        					<TextInput
      							style={{ height: 50, padding: 10, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
      							placeholder="Please enter the brand of your car"
    						/>
    					</View>

    					<View style={{marginVertical: 7}}>
        					<Text style={{color: '#fff', fontSize: 14, paddingBottom: 5,}}>Car Number Plate: </Text>
        					<TextInput
      							style={{ height: 50, padding: 10, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
      							placeholder="Please enter your car number plate"
    						/>
    					</View>

    					<View style={{marginVertical: 7}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                    <Text style={{color: '#fff', fontSize: 14, paddingBottom: 5,}}>Year of Manufacture: </Text>
                    {/*<TouchableOpacity onPress={showDatepicker} style={{backgroundColor: '#fff', borderRadius: 4}}>
                                          <Text style={{color: '#000', textAlign: 'center', fontSize: 14, fontWeight: '800', padding: 5,}}>Pick date</Text>
                                        </TouchableOpacity>*/}
                  </View>
                  <TextInput
                    style={{ height: 50, padding: 10, marginTop: 4, borderColor: 'gray', borderWidth: 1, color: '#000', borderRadius: 4, backgroundColor: '#fff' }}
                    placeholder="Enter Year"
                />
                  {/*<View style={{backgroundColor: '#fff'}}>
                                    {show &&
                                      <View style={{backgroundColor: '#fff'}}>
                                        <DateTimePicker
                                          testID="dateTimePicker"
                                          timeZoneOffsetInMinutes={0}
                                          value={date}
                                          mode={mode}
                                          is24Hour={true}
                                          display="calendar"
                                          onChange={onChange}
                                          maximumDate={new Date(2300, 10, 20)}
                                          minimumDate={new Date(1950, 0, 1)}
                                          textColor="red"
                                        />
                                        <Text style={{color: '#fff', fontSize: 14, paddingBottom: 5,}}>{moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                                      </View>
                                    }
                                    </View>*/}
    					</View>

    					<View style={{marginVertical: 7}}>
        					<Text style={{color: '#fff', fontSize: 14, paddingBottom: 5,}}>Select pictures of your car: </Text>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 7,}}>
                    <View>
                      <TouchableOpacity onPress={openFrontImagePickerAsync} style={{backgroundColor: '#fff', borderRadius: 4}}>
                        <Text style={{color: '#000', textAlign: 'center', fontSize: 14, fontWeight: '800', padding: 5,}}>Front View</Text>
                      </TouchableOpacity>
                      {frontImage !== null && 
                        <View style={{alignItems: 'center', justifyContent: 'center',}}>
                          <Image source={{ uri: frontImage.localUri }} style={styles.thumbnail}/>
                        </View>
                      }
                    </View>

                    <View>
                      <TouchableOpacity onPress={openRearImagePickerAsync} style={{backgroundColor: '#fff', borderRadius: 4}}>
                        <Text style={{color: '#000', textAlign: 'center', fontSize: 14, fontWeight: '800', padding: 5,}}>Rear View</Text>
                      </TouchableOpacity>
                      {rearImage !== null && 
                        <View style={{alignItems: 'center', justifyContent: 'center',}}>
                          <Image source={{ uri: rearImage.localUri }} style={styles.thumbnail}/>
                        </View>
                      }
                    </View>  
                  </View>

                  <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 7,}}>
                    <View>
                      <TouchableOpacity onPress={openLeftImagePickerAsync} style={{backgroundColor: '#fff', borderRadius: 4}}>
                        <Text style={{color: '#000', textAlign: 'center', fontSize: 14, fontWeight: '800', padding: 5,}}>Side View</Text>
                      </TouchableOpacity>
                      {leftImage !== null && 
                        <View style={{alignItems: 'center', justifyContent: 'center',}}>
                          <Image source={{ uri: leftImage.localUri }} style={styles.thumbnail}/>
                        </View>
                      }
                    </View>

                    <View>
                      <TouchableOpacity onPress={openRightImagePickerAsync} style={{backgroundColor: '#fff', borderRadius: 4}}>
                        <Text style={{color: '#000', textAlign: 'center', fontSize: 14, fontWeight: '800', padding: 5,}}>Side View</Text>
                      </TouchableOpacity>
                      {rightImage !== null && 
                        <View style={{alignItems: 'center', justifyContent: 'center',}}>
                          <Image source={{ uri: rightImage.localUri }} style={styles.thumbnail}/>
                        </View>
                      }
                    </View>  
                  </View>
    					</View>

    					<View style={{marginVertical: 7,}}>
    						<TouchableOpacity onPress={() => navigation.navigate("Home")} style={{backgroundColor: '#fff', borderRadius: 4}}>
    							<Text style={{color: '#000', textAlign: 'center', fontSize: 16, fontWeight: '800', paddingVertical: 10,}}>Save</Text>
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
  },
  thumbnail: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 4,
  },
})