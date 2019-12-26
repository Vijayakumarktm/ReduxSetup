import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class DashboardMenu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'instagram', image: 'https://img.icons8.com/metro/26/000000/instagram-new.png'},
                {id: 2, name: 'twitter', image: 'https://img.icons8.com/metro/26/000000/twitter.png'},
                {id: 3, name: 'google', image: 'https://img.icons8.com/metro/26/000000/google-plus.png'},
                {id: 4, name: 'facebook', image: 'https://img.icons8.com/metro/26/000000/facebook.png'},
                {id: 5, name: 'youtube', image: 'https://img.icons8.com/metro/26/000000/youtube.png'},
                {id: 6, name: 'linkedin', image: 'https://img.icons8.com/metro/26/000000/linkedin.png'},
                {id: 7, name: 'github', image: 'https://img.icons8.com/metro/26/000000/github.png'},
                {id: 8, name: 'stackoverflow', image: 'https://img.icons8.com/metro/26/000000/stackoverflow.png'},
            ],
        };
    }

    renderRowData = (item) =>{
        return(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.profileBoxShadow}>
                    <Image style={styles.imageStyle} source={{uri:item.image}}/>
                </View>
                <Text style={styles.textStyle}>{item.name}</Text>
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
  
export default connect(mapStateToProps, dispatchToProps)(DashboardMenu);

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
    imageStyle: {
        height: 30,
        width: 30,
        alignSelf:'center'
    },
    textStyle: {
        fontSize: 20,
        paddingVertical: 0,
    },
    profileBoxShadow: {
        margin: 15,
        elevation: 4,
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 4,
        shadowOffset: {
          height: StyleSheet.hairlineWidth,
        },
        borderRadius: 60,
      },
});
