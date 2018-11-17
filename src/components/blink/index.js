import React, { Component } from 'react';
import { StyleSheet, Text,  AppRegistry, Image, View,  ScrollView, Animated } from 'react-native';
import { Dimensions }  from 'react-native';


// Man erschaffe eine neue Klasse für jxml-Elemente
export class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
                  // ausgehend vom momentanen Status
      this.setState(previousState => (
                          // ändere den Status ins Gegenteil
          { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }




  // bei jedem Rendern
  render() {
    // sofern der Sichtbarkeits-State nicht auf true steht
    if (!this.state.isShowingText) {
      // rendere nichts
      return null;
    }

    // andernfalls
    return (
      // gebe jederzeit den Inhalt als Text-Element aus
      <Text>{this.props.text}</Text>
    );
  }
}