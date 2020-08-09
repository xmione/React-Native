import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';

class LoginScreen extends Component{
    state = { user: null };

    componentDidMount() {
      this.initAsync();
    }

    initAsync = async () => {
      await GoogleSignIn.initAsync({
        // You may ommit the clientId when the firebase `googleServicesFile` is configured
        clientId: '356234762218-7ra9dkv3chffmp44ft44c4roeq8mn7a9.apps.googleusercontent.com'
      });
      this._syncUserWithStateAsync();
    };

    _syncUserWithStateAsync = async () => {
      const user = await GoogleSignIn.signInSilentlyAsync();
      this.setState({ user });
    };

    signOutAsync = async () => {
      await GoogleSignIn.signOutAsync();
      this.setState({ user: null });
    };

    signInAsync = async () => {
      try {
        await GoogleSignIn.askForPlayServicesAsync();
        const { type, user } = await GoogleSignIn.signInAsync();
        if (type === 'success') {
          this._syncUserWithStateAsync();
        }
      } catch ({ message }) {
        alert('login: Error:' + message);
      }
    };

    onPress = () => {
      if (this.state.user) {
        this.signOutAsync();
      } else {
        this.signInAsync();
      }
    };
    
    render(){
        return(
            <View style={styles.container}>
                <Button 
                    title="Sign In With Google" 
                    onPress={()=>this.onPress()}
                />
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});