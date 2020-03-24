import React, {Component} from 'react';
import { StyleSheet, Button, ScrollView, SafeAreaView, KeyboardAvoidingView, Text, View } from 'react-native';

//
import {AuthContext} from '../context';

export const LoginScreen = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text style={{fontSize: 24, textAlign: 'center', marginVertical: 10}}>LoginScreen</Text>
      <Button title="Login" onPress={() => signIn()} />
      <Button title="Go to signup" onPress={() => navigation.push("Signup")} />
      <Button title="Go to ForgotPassword" onPress={() => navigation.push("ForgotPassword")} />
    </View>
  );
}
/*import { Button } from 'react-native-elements';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default class LoginScreen extends Component {

  state = {
    email: '',
    password: ''
  }

  handleEmailChange = (email) => {
    this.setState({ email })
  }

  handlePasswordChange = (password) => {
    this.setState({ password })
  }

  onLogin = async () => {
    const { email, password } = this.state
    try {
      if (email.length > 0 && password.length > 0) {
        this.props.navigation.navigate('Dashboard')
      }
    } catch (error) {
      console.log(error);
    }
  }

  goToSignup = () => this.props.navigation.navigate('Signup');
  goToForgotPassword = () => this.props.navigation.navigate('ForgotPassword');
  
  render() {
    const { email, password } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <KeyboardAvoidingView behavior="padding">
        <FormInput
          name='email'
          value={email}
          placeholder='Username'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
          iconName='ios-person'
          iconColor='#fff'
        />
        <FormInput
          name='password'
          value={password}
          placeholder='Enter password'
          secureTextEntry
          onChangeText={this.handlePasswordChange}
          iconName='ios-lock'
          iconColor='#fff'
        />
        <View style={styles.buttonContainer}>
          <FormButton
            buttonType='outline'
            onPress={this.handleOnLogin}
            title='LOGIN'
            buttonColor='#fff'
          />
        </View>
       
        <Button
          title="Register |"
          onPress={this.goToSignup}
          titleStyle={{
            color: '#fff'
          }}
          type='clear'
        />
        <Button
          title='Forgot Password?'
          onPress={this.goToForgotPassword}
          titleStyle={{
            color: '#039BE5'
          }}
          type='clear'
        />
        
        </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    color: '#fff',
    //alignItems: 'center',  
  },
  buttonContainer: {
    margin: 25
  },
  contentContainer: {
    justifyContent: 'center',
    flex: 1,
  }
})*/

