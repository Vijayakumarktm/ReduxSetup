import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

class Form1Screen extends Component {
    
    static getDerivedStateFromProps(props, state){
        console.log('Form1Screen getDerivedStateFromProps: ', props.nameFromReducer);
        return {
            name: props.nameFromReducer,
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            name : 'Vijayakumar KTM',
        };
    }

    onClick = () => {
        console.log('Name', this.state.name);
        Actions.Form2Screen();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textStyle}>
                    <Text style={styles.textStyle}>{this.state.name}</Text>
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onClick()}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableHighlight>
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
  
export default connect(mapStateToProps, dispatchToProps)(Form1Screen);

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
    textStyle: {
        fontSize: 20,
        paddingVertical: 10,
    }
});
