import React, { Component } from 'react';
import { StyleSheet, Text, TextInput,  View, Image, TouchableHighlight, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class DashboardScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            isLoading: false,
        };
    }
    
    onClick = () => {
        console.log('Login', this.state.email, this.state.password);
        this.setState({isLoading: true});
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{height : 300 , width : 300, top: 0}}
                    resizeMode={'center'} source={require('../image/personaltext.png')}
                />
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        onChangeText={(email) => this.setState({email})}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        onChangeText={(password) => this.setState({password})}/>
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onClick()}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableHighlight>
                { this.state.isLoading ?
                    <View style={styles.loaderBackground}>
                        <ActivityIndicator
                            size="large" 
                            color="#000000"
                        />
                    </View>
                    :
                    null
                }
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
  
export default connect(mapStateToProps, dispatchToProps)(DashboardScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inputContainer: {
        borderColor: 'black',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderWidth: 1,
        width:300,
        height: 50,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
    },
    inputs:{
        height:45,
        marginLeft:16,
        fontSize: 20,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    buttonContainer: {
        height:50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:200,
        borderRadius:30,
    },
    sendButton: {
     backgroundColor: "#000000",
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    loaderBackground:{
        backgroundColor: 'rgba(255,255,255,0.6)',
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});