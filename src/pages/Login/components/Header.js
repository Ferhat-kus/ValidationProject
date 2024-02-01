import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <View>
                <Text style={styles.logo}>UDAK</Text>
                <Text style={styles.logoDescription}>Property & Tax Survey</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo:{
        textAlign:'center',
        fontSize:40,
        color:'#f2f2f2',
        fontWeight:'bold',
      },
      logoDescription:{
        textAlign:'center',
        color:'#f2f2f2',
      },
})