import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class CardScreen extends Component {
    
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flexRow}>
                    <View style={styles.profileBoxShadow}>
                        <View style={styles.textStyle}>
                            <Text style={styles.textStyle}>Card 1</Text>
                        </View>
                    </View>
                    <View style={styles.profileBoxShadow}>
                        <View style={styles.textStyle}>
                            <Text style={styles.textStyle}>Card 2</Text>
                        </View>
                    </View>
                </View>
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
  
export default connect(mapStateToProps, dispatchToProps)(CardScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    flexRow: {
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 20,
        paddingVertical: 10,
    },
    profileBoxShadow: {
        marginHorizontal: 20,
        elevation: 4,
        padding: 25,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowOffset: {
          height: StyleSheet.hairlineWidth,
        },
        borderRadius: 10,
      },
});
