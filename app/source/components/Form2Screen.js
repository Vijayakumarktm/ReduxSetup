import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';
import { saveNameByAction } from '../actions/formAction';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

class Form2Screen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            showSendButton: true,
        };
        
    }

    onBackClick = () => {
       Actions.pop();
    }

    onSendClick = () => {
        console.log('Name', this.state.name);
        this.setState({showSendButton: false});
        this.props.saveNameByAction(this.state.name);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Name"
                        onChangeText={(name) => this.setState({name})}/>
                </View>
                
                { this.state.showSendButton ?
                    <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onSendClick()}>
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableHighlight>
                    : 
                    <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onBackClick()}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableHighlight>
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};
  
const dispatchToProps = (dispatch) => {
    return bindActionCreators({
      saveNameByAction,
    }, dispatch);
};
  
export default connect(mapStateToProps, dispatchToProps)(Form2Screen);

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
    }
});
