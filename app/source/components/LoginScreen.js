

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Image, View, Dimensions, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : 'Vijayakumar KTM',
            password : '',
        };
    }

    onClick = () => {
        console.log('Name', this.state.name);
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{}}>
                    <View style={{alignItems: 'center'}}>
                        <Image style={{height : 300 , width : 300, top: 0}}
                            resizeMode={'center'} source={require('../image/waiting.png')}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 10,
                        }}
                    >
                    <Image
                        style={{width: deviceHeight / 40, height: deviceHeight / 40}}
                        resizeMode="contain"
                        source={require('../image/username.png')}
                    />

                    <TextInput
                        style={styles.textinput}
                        placeholder={'Username'}
                        value={this.state.username}
                        onChangeText={username => {
                            this.setState({username});
                        }}
                        placeholderTextColor={'white'}
                        autoCapitalize={'none'}
                        onSubmitEditing={() => this.passwordInputText.focus()}
                    />
                    </View>

                    <View style={{backgroundColor: 'white', height: 1}}></View>
               
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: deviceHeight / 25,
                        }}
                    >
                    <Image
                        style={{width: deviceHeight / 40, height: deviceHeight / 40}}
                        resizeMode="contain"
                        source={require('../image/password.png')}
                    />

                    <TextInput
                        ref={input => (this.passwordInputText = input)}
                        style={styles.textinput}
                        placeholder={'Password'}
                        value={this.state.password}
                        onChangeText={password => {
                            this.setState({password});
                        }}
                        placeholderTextColor={'white'}
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        onSubmitEditing={() => {
                            
                        }}
                        secureTextEntry={true}
                    />
                    </View>

                    <View style={{backgroundColor: 'white', height: 1}}></View>

                    <View style={{flexDirection: 'row', marginTop: deviceHeight / 20}}>
                        <TouchableHighlight
                            activeOpacity={0.5}
                            style={styles.signInButton}
                            onPress={() => {
                                
                            }}>
                            <Text style={[styles.loginText, {color: 'white'}]}>Sign In</Text>
                        </TouchableHighlight>

                        <View style={{flex: 1}}></View>

                        <TouchableHighlight
                            activeOpacity={0.5}
                            style={styles.signUpButton}
                            onPress={() => {
                            
                            }}>
                            <Text style={[styles.loginText, {color: 'white'}]}>Sign Up</Text>
                        </TouchableHighlight>
                    </View>
                    </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nameFromReducer: state.formState.name,
    };
};
  
const dispatchToProps = (dispatch) => {
    return bindActionCreators({
      
    }, dispatch);
};
  
export default connect(mapStateToProps, dispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'black',
        opacity :.8, 
      },
      image: {
        width: deviceHeight * (5 / 12),
        height: deviceHeight * (3 / 20),
      },
      textinput: {
        width: deviceWidth - 80,
        color: 'white',
        padding: 10,
        fontSize: 24,
      },
      loginText: {
        color: 'black',
        fontSize: 24,
      },
      signInButton: {
        flex: 5,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
      },
      signUpButton: {
        flex: 5,
        backgroundColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
      },
        
});
