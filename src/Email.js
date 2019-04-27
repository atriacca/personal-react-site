// https://www.npmjs.com/package/react-native-mail
// npm i --save react-native-mail # npm syntax 

import React, { Component } from 'react';
import { View, Alert, Button } from 'react-native';
import Mailer from 'react-native-mail';
 
class Email extends Component {
 
  handleEmail = () => {
    Mailer.mail({
      subject: 'Your Saved Inspirational Design Quote',
      recipients: ['support@example.com'],
      ccRecipients: ['supportCC@example.com'],
      bccRecipients: ['supportBCC@example.com'],
      body: 'Here is the Inspirational Design Quote you requested...',
      isHTML: true,
      attachment: {
        path: '',  // The absolute path of the file from which to read data.
        type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
        name: '',   // Optional: Custom filename for attachment
      }
    }, (error, event) => {
      Alert.alert(
        error,
        event,
        [
          {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
          {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
        ],
        { cancelable: true }
      )
    });
  }
 
  render() {
    const styles = {
    }
    return (
      <View style={styles.container}>
        <Button
          onPress={this.handleEmail}
          title="Email Me"
          color="#841584"
          accessabilityLabel="Purple Email Me Button"
        />
      </View>
    );
  }
}
export default Email