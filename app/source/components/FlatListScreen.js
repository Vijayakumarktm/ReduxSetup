import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class FlatListScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'card'},
                {id: 2, name: 'card'},
                {id: 3, name: 'card'},
                {id: 4, name: 'card'},
                {id: 5, name: 'card'},
                {id: 6, name: 'card'},
                {id: 7, name: 'card'},
                {id: 8, name: 'card'},
                {id: 9, name: 'card'},
                {id: 10, name: 'card'},
                {id: 11, name: 'card'},
                {id: 12, name: 'card'},
            ],
        };
    }

    renderRowData = (item) =>{
        return(
            <View style={styles.profileBoxShadow}>
                <View style={styles.textStyle}>
                    <Text style={styles.textStyle}>{item.name}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flatListContainer}>
                    <FlatList 
                        style={styles.flatList}
                        data={this.state.data}
                        keyExtractor= {(item) => {
                            return item.id.toString();
                        }}
                        renderItem={({item}) => 
                            this.renderRowData(item)
                        }
                        numColumns={3}
                    />
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
  
export default connect(mapStateToProps, dispatchToProps)(FlatListScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    flatListContainer: {
        marginTop: 80,
    },
    flatList: {
        flex: 1,
        paddingTop: 30
    },
    textStyle: {
        fontSize: 20,
        paddingVertical: 10,
    },
    profileBoxShadow: {
        margin: 10,
        elevation: 4,
        padding: 30,
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
