import React, { Component } from 'react';
import { Alert, StyleSheet, Button, View } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';
import MaskInput, { Masks } from 'react-native-mask-input';

export default class Form extends Component {
  state = {
    email: '',
    selectedDate: '',
  };

  handleChange = (email, selectedDate) => {
    this.setState({ email });
    this.setState({ selectedDate });
  };

  handleDateChange = (formatted, extracted) => {
    this.setState({ selectedDate: extracted });
  };

  handleSubmit = () => {
    if (this.state.selectedDate&&this.state.email) {
      Alert.alert('Giriş Başarılı');
    } else {
      Alert.alert('Lütfen zorunlu alanları doldurun');
    }
  };

  render() {
    const { email, selectedDate } = this.state;
    return (
      <View>
        <Form ref="form" onSubmit={this.handleSubmit}>
          <TextValidator
            style={styles.Input}
            name="email"
            label="E-posta"
            validators={['required', 'isEmail']}
            errorMessages={['Bu alan zorunlu', 'Geçersiz E-posta']}
            placeholder="E-posta adresiniz"
            type="text"
            keyboardType="email-address"
            value={email}
            onChangeText={this.handleChange}
          />          <MaskInput
            style={styles.Input}
            value={selectedDate}
            keyboardType="numeric"
            placeholder="Tarih giriniz"
            mask={Masks.DATE_MMDDYYYY}
            onChangeText={this.handleDateChange}
          />
          <Button title="Gönder" onPress={this.handleSubmit} />
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
