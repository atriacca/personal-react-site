Fancy fonts: Zapfino, Noteworthy, Bradley Hand, Apple Chancery, SignPainter
https://cdn-images-1.medium.com
https://cdn-images-1.medium.com/max/1600/1*agGENodMcD6hhwIFdqGwrw.jpeg
https://cdn-images-1.medium.com/max/2560/1*IiQuFZskyWATRJBMXGVXkQ.jpeg
https://images.unsplash.com/photo-1554447712-468098b7e184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
https://images.unsplash.com/photo-1554519757-2fcb844e5c65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80
https://images.unsplash.com/photo-1554398063-26678c252e83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60
https://images.unsplash.com/photo-1554341620-22f2af7b7935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
https://images.unsplash.com/photo-1553812642-69997baf1459?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80

Mow lawns and shovel driveways
Pump gasoline (yep, they were full service gas stations back then - and gas was 55 cents/gallon!!)
Bus boy/dishwasher
Macro photography technician
PCB designer
Inside sales
IC digitizer
Methods (technical) writer
Applications Engineer
Account manager/sales
Customer Service supervisor
Tech Support Rep
Tier 2 TS rep


To remove p tags and other HTML stuff per Bob use: dangerously set innerhtml react
<div dangerouslySetInnerHTML={{__html:myStringHTML}}></div>

design keywords: design', template', create', creator', 'layout', hierarchy', sketch', mock' 
learning keywords: course, tutorials, examples, practices, school, learn
dev keywords: dev, website, components, function, program,

responsive software portfolio package freelance hosting content multimedia SEO art pixel  font  method 

devKeywords: ['dev', 'website', 'components', 'function', 'program'],
designKeywords: ['design', 'template', 'create', 'creator', 'layout', 'hierarchy', 'sketch', 'mock', 'art'],
learnKeywords: ['course', 'tutorials', 'examples', 'practices', 'school', 'learn'],

https://www.npmjs.com/package/react-html-email
$ npm install react-html-email

https://www.npmjs.com/package/react-native-mail
npm i --save react-native-mail # npm syntax 

import React, { Component } from 'react';
import { View, Alert, Button } from 'react-native';
import Mailer from 'react-native-mail';
 
export default class App extends Component {
 
  handleEmail = () => {
    Mailer.mail({
      subject: 'need help',
      recipients: ['support@example.com'],
      ccRecipients: ['supportCC@example.com'],
      bccRecipients: ['supportBCC@example.com'],
      body: '<b>A Bold Body</b>',
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

http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10

http://quotesondesign.com/wp-json/posts?filter[queryByContent]=java
http://quotesondesign.com/wp-json/wp/v2/posts?search=<java>
http://quotesondesign.com/wp-json/posts?search=java

http://quotesondesign.com/wp-json/posts?rand&filter[posts_per_page]=10

http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10=LIKE&filter[meta_value]=coding


http://quotesondesign.com/wp-json/posts?categories=design
http://quotesondesign.com/wp-json/search/?q=design

fetch( 'https://domain.com/wp-json/wp/v2/cars?filter[meta_key]=brands&filter[meta_compare]=LIKE&filter[meta_value]=tesla


What happened to the ?filter= query parameter? #What happened to the ?filter= query parameter?
When the REST API was merged into WordPress core the ?filter query parameter was removed to prevent future compatibility and maintenance issues. The ability to pass arbitrary WP_Query arguments to the API using a ?filter query parameter was necessary at the genesis of the REST API project, but most API response filtering functionality has been superseded by more robust query parameters like ?categories=, ?slug= and ?per_page=.

First-party query parameters should be used whenever possible. However, the rest-filter plugin restores the ability to pass arbitrary ?filter values in API request if needed.

http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=2=LIKE&filter[meta_value]=learn
http://quotesondesign.com/wp-json/posts?filter[orderby]=LIKE&filter[meta_value]=learn=rand&filter[posts_per_page]=2
http://quotesondesign.com/wp-json/posts?filter[meta_value]=develop
http://quotesondesign.com/wp-json/posts?rand&filter[posts_per_page]=10
