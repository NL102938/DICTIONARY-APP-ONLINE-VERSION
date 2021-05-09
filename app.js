import React,{ Component } from 'react';
import {Sylesheet, View, Text} from 'react-native';
import HomeScreen from './HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style = {{flex:1}}> 
        <HomeScreen/>
      </View>
    )
  }
}
