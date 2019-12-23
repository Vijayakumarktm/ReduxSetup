import React, { Component } from 'react';
import { StyleSheet, Text, ActivityIndicator, Dimensions, View, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

const deviceHeight = Dimensions.get('window').height;

class DownToUpPopUpScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showPopUp: false,
        };
    }

    onClick = () => {
       this.setState({showPopUp: true});
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onClick()}>
                    <Text style={styles.buttonText}>Click To Show PopUp</Text>
                </TouchableHighlight>
                { this.state.showPopUp ? 
                    <View style={styles.popUpContainer}>
                        <View style={styles.popUpBackground}/>
                            <View style={styles.popUpContentBackground}>
                                <TouchableHighlight style={{}} onPress={() => this.setState({showPopUp: false})}>
                                    <Text style={styles.closeButton}> X </Text>
                                </TouchableHighlight>
                            <View style={{height : deviceHeight - (deviceHeight/1.5)}}>
                                <View style={styles.loaderBackground}>
                                    <ActivityIndicator
                                        size="large" 
                                        color="#000000"
                                    />
                                </View>
                            </View>
                        </View>
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
        
    };
};
  
const dispatchToProps = (dispatch) => {
    return bindActionCreators({
      
    }, dispatch);
};
  
export default connect(mapStateToProps, dispatchToProps)(DownToUpPopUpScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
    popUpContainer:{
        position : 'absolute', 
        bottom : 0, 
        left : 0, 
        right : 0, 
        top :0, 
        zIndex : 5
    },
    popUpBackground: {
        backgroundColor : 'black',
        opacity :.3, 
        flex: 1
    },
    popUpContentBackground: {
        backgroundColor : 'white', 
        borderTopLeftRadius : 10, 
        borderTopRightRadius : 10, 
        overflow : 'hidden'
    },
    closeButton: {
        fontSize: 40, 
        color : 'black', 
        margin: 10
    },
    loaderBackground:{
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
