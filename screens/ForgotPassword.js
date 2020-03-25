import React, {Component} from 'react';
import {Platform, ActivityIndicator, AsyncStorage, YellowBox, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from "firebase";

YellowBox.ignoreWarnings(['Warning: componentWill'])
console.disableYellowBox = true;

export default class ForgotPassword extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading: false,
      message: ''
    }
  }

  send = () => {
    let {email} = this.state
    if (this.state.email != ''){
      this.setState({
        loading:true,
        message: ''
      })
      firebase.auth().sendPasswordResetEmail(email)
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
      <View style={{flex: 1, backgroundColor: '#000', paddingVertical: 30}}>

        <View style={{backgroundColor: '#000'}}>
          <View style={{height: 40,}}>
            <View style={{alignItems: 'flex-start', justifyContent: 'center',}}>
              <TouchableOpacity style={{marginHorizontal: 15,}} onPress={() => this.props.navigation.navigate("Login")}>
                <Ionicons name="ios-arrow-round-back" size={40} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{flex: 1, backgroundColor: '#000000'}}>
          <ScrollView style={{flex: 1,}} contentContainerStyle={styles.contentContainer}>
            <KeyboardAvoidingView style={{flex: 1,}} behavior="padding" enabled>
              <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 40, paddingVertical: 40, }}>
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={{color: '#fff', textAlign: 'center', paddingVertical: 15 }}>{message}</Text>}
                <View style={{flex: 1,  justifyContent: 'center',}}>
                  <Text style={{fontSize: 18, textAlign: 'center', fontStyle: 'normal', fontWeight: '400', color: '#fff', paddingVertical: 20,}} >Forgot Password?</Text>
                  <TextInput keyboardType = 'email-address' onChangeText={(email)=>this.setState({email})} placeholder="Your email" style={{textAlign: 'left', height: 50, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 2, marginVertical: 10}}/>
                </View>

                <View style={{marginTop: 20, marginBottom: 10,}}>
                  <TouchableOpacity onPress={this.send} style={{backgroundColor: '#fff', borderRadius: 4}}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: '#000', paddingVertical: 10, paddingHorizontal: 70,}}>Reset</Text>
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