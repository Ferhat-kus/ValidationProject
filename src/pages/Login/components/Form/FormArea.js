
import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Validation from './components/Validation';


export default class FormArea extends Component {
  render() {
    return (
      <View style={{}}>
        <Text style={styles.loginAreaTitle}>Property Tax Server</Text>
        <Text style={styles.loginAreaDescription}>Lorem Ipsum is simply dummy of the printing.</Text>
        <Validation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginArea:{
    marginHorizontal:40,
    marginVertical:40,
    backgroundColor:'#fff',
    padding:20,
    borderRadius:5,
    elevation:3,
  },
  loginAreaTitle:{
    fontSize:30,
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
  },
})