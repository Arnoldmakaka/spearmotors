import React, {Component} from 'react';
import {Platform, ActivityIndicator, AsyncStorage, YellowBox, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from "firebase";

YellowBox.ignoreWarnings(['Warning: componentWill'])
console.disableYellowBox = true;

export default class LoginScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      message: ''
    }
  }

  login = () => {
    let {email, password} = this.state
    if (this.state.email != '' && (this.state.password != '' && this.state.password.length > 6 )){
      this.setState({
        loading:true,
        message: ''
      })
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.navigation.navigate("Home");
      })
      .catch((err) => {
        this.setState({
          loading:false,
          message: err.message
        })
      })
    }
    else{
      Alert.alert("Misiing Fields", "Please fill in all required fields")
    }
  }

  render() {
    let{message, loading} = this.state
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <View style={{flex: 1, backgroundColor: '#000000'}}>
          <ScrollView style={{flex: 1,}} contentContainerStyle={styles.contentContainer}>
            <KeyboardAvoidingView style={{flex: 1,}} behavior="padding" enabled>
              <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 40, paddingVertical: 40, }}>
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={{color: '#fff', textAlign: 'center', paddingVertical: 15 }}>{message}</Text>}
                <View style={{flex: 1,  justifyContent: 'center',}}>
                  <Text style={{fontSize: 18, textAlign: 'center', fontStyle: 'normal', fontWeight: '400', color: '#000', paddingVertical: 20,}} >Login</Text>
                  <TextInput keyboardType = 'email-address' onChangeText={(email)=>this.setState({email})} placeholder="Your email" style={{textAlign: 'left', height: 45, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 2, marginVertical: 10}}/>
                  <TextInput keyboardType = 'default' secureTextEntry onChangeText={(password)=>this.setState({password})} placeholder="Password***" style={{textAlign: 'left', height: 45, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 2, marginVertical: 10}}/>
                </View>

                <View style={{marginTop: 25, marginBottom: 15,}}>
                  <TouchableOpacity onPress={this.login} style={{backgroundColor: '#fff', borderRadius: 4}}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: '#000', paddingVertical: 10, paddingHorizontal: 70,}}>Login</Text>
                  </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row',}}>
                  <TouchableOpacity onPress={() => this.props.navigation.push("Signup")} style={{paddingRight: 5,}}>
                    <Text style={{textAlign: 'left', fontSize: 16, color: '#fff',}}>Register</Text>
                  </TouchableOpacity>
                  <View style={{paddingRight: 5,}}>
                    <Text style={{textAlign: 'left', fontSize: 16, color: '#fff',}}> | </Text>
                  </View>
                  <TouchableOpacity onPress={() => this.props.navigation.push("ForgotPassword")} style={{paddingRight: 5,}}>
                    <Text style={{textAlign: 'left', fontSize: 16, color: '#fff',}}>Forgot Password</Text>
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