import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { Component } from 'react'
import Header from './components/Header'
import FormArea from './components/Form/FormArea'

export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headBacgraund} />
                <KeyboardAvoidingView behavior="position">
                    <Header />
                    <ScrollView>
                        <View style={styles.loginArea}>
                            <FormArea />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 80,
    },
    headBacgraund: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 280,
        width: '100%',
        backgroundColor: '#1572de',
    },
    loginArea: {
        marginHorizontal: 40,
        marginVertical: 40,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        elevation: 3,
    },

});