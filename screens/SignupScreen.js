import React, {Component} from 'react';
import {Platform, ActivityIndicator, AsyncStorage, YellowBox, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from "firebase";

YellowBox.ignoreWarnings(['Warning: componentWill'])
console.disableYellowBox = true;

export default class SignupScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      loading: false,
      message: '',
      title: '',
      name: '',
      address: '',
      pcontact: '',
      email: '',
    }
  }

  signIn = () => {
    let {title, name, dob, address, pcontact, email, password} = this.state
    if (this.state.email != '' && this.state.title != '' && this.state.name != ''  && this.state.password != ''){
      if(this.state.password.length > 6){
        this.setState({
          loading:true,
          message: ''
        })
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          firebase.auth().currentUser.updateProfile({
            displayName: name
          }).then(() => {
            console.log(user)
            let newid = title+name;
            firebase.database().ref('SpearMotorsUsers/' + newid).push({
              Title: title,
              Fullname: name,
              Email: email,
              PhoneNumber: pcontact,
              Address: address
            }).catch((err) => {
                console.log(err)
            })
          }).then(() => {
              /*this.props.navigation.navigate("Home");*/
              this.storeData();
            }).catch((err) => {
                this.setState({
                  loading:false,
                  message: err.message
                })
                console.log(err);
              }) 
        })
        .catch((err) => {
          this.setState({
            loading:false,
            message: err.message
          })
          console.log(err);
        })
      }
      else{
        Alert.alert("Invalid Password", "Password must be more than 6 characters")
      }
    }
    else{
      Alert.alert("Missing Fields", "Please fill in all the required fields!!!")
    }
  }

  storeData = async () => {
    let {title, name, address, pcontact, email, password, loading, message} = this.state;
    let userData = {
      useraddress: address,
      phonenumber: pcontact,
      usertitle: title    
    }
    try {
      await AsyncStorage.setItem('@key_userinfo', JSON.stringify(userData));
        this.props.navigation.navigate("Home");
    }catch (error) {
        console.log("Saving Information", error);
    }
  }

  render() {
    let {title, name, address, pcontact, email, password, loading, message} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#000', paddingTop: 30}}>
        <View style={{flex: 1, backgroundColor: '#000000'}}>
          <ScrollView style={{flex: 1,}} contentContainerStyle={styles.contentContainer}>
            <KeyboardAvoidingView style={{flex: 1,}} behavior="padding" enabled>

              <View style={{backgroundColor: '#000', paddingTop: 20,}}>
                <View style={{height: 30,}}>
                  <View style={{alignItems: 'flex-start', justifyContent: 'center',}}>
                    <TouchableOpacity style={{marginHorizontal: 15,}} onPress={() => this.props.navigation.navigate("Login")}>
                      <Ionicons name="ios-arrow-round-back" size={40} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={{flex: 1, paddingHorizontal: 30,}}>
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={{color: '#fff', textAlign: 'center', paddingVertical: 5 }}>{message}</Text>}
                <View style={{flex: 1, justifyContent: 'center',}}>
                  <TextInput autoFocus keyboardType = 'default' onChangeText={(title)=>this.setState({title})} placeholder="Title" style={{textAlign: 'left', height: 40, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 2, marginVertical: 7}}/>
                  <TextInput keyboardType = 'default' onChangeText={(name)=>this.setState({name})} placeholder="Full Name" style={{textAlign: 'left', height: 40, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 2, marginVertical: 7}}/>
                  <TextInput keyboardType = 'default' secureTextEntry onChangeText={(password)=>this.setState({password})} placeholder="Password" style={{textAlign: 'left', height: 40, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 2, marginVertical: 7}}/>
                  <TextInput onChangeText={(address)=>this.setState({address})} placeholder="Residence/Address" style={{textAlign: 'left', height: 40, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 2, marginVertical: 7}}/>
                  <TextInput keyboardType = 'phone-pad' onChangeText={(pcontact)=>this.setState({pcontact})} placeholder="Phone Contact" style={{textAlign: 'left', height: 40, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 2, marginVertical: 7}}/>
                  <TextInput keyboardType = 'email-address' onChangeText={(email)=>this.setState({email})} placeholder="Email" style={{textAlign: 'left', height: 40, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 2, marginVertical: 7}}/>
                
                </View>
                
                <View style={{marginTop: 20, marginBottom: 10,}}>
                  <TouchableOpacity onPress={this.signIn} style={{backgroundColor: '#fff', borderRadius: 4}}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: '#000', paddingVertical: 10, paddingHorizontal: 70,}}>Register</Text>
                  </TouchableOpacity>
                </View>

              </View> 

              
               
            </KeyboardAvoidingView>
            
          </ScrollView>  
        </View>

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
    width: 120,
    height: 120,
    resizeMode: "contain",
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 4,
  },
})