import React, {Component} from 'react';
import { View, StatusBar, Platform } from 'react-native';
import {connect} from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import Form1Screen from './components/Form1Screen';
import Form2Screen from './components/Form2Screen';
import { bindActionCreators } from 'redux';
import DashboardScreen from './components/DashboardScreen';
import DownToUpPopupScreen from './components/DownToUpPopupScreen';
import LoginScreen from './components/LoginScreen';

class AppNavigator extends Component {

  
    constructor(props) {
      super(props);    
      console.disableYellowBox = true;
    }
  
    componentDidMount() {
      
    }

    render() {
        return (
            <View style={{flex : 1}}>
                <Router>
                    <Scene key="root" hideNavBar>
                        <Scene key="LoginScreen" component={LoginScreen} initial/>
                        <Scene key="DownToUpPopUpScreen" component={DownToUpPopupScreen} />
                        <Scene key="DashboardScreen" component={DashboardScreen}/>
                        <Scene key="Form1Screen" component={Form1Screen}/>
                        <Scene key="Form2Screen" component={Form2Screen}/>
                    </Scene>
                </Router>
            </View>
        );
    }

}


const mapStateToProps = (state) => {
    return {};
};
  
const dispatchToProps = (dispatch) => {
    return bindActionCreators({
      
    }, dispatch);
};
  
export default connect(mapStateToProps, dispatchToProps)(AppNavigator);
  