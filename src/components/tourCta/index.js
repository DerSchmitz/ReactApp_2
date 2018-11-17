import React, { Component } from 'react';
import { StyleSheet, Text,  AppRegistry, Image, View,  ScrollView, Animated } from 'react-native';
import { Dimensions }  from 'react-native';




// Man erschaffe eine neue Klasse für jxml_Elemente, welche
export class TourCta extends Component {
      render() {
        return (
          // folgenden jxml-output bedeuten

                        // nehme den Attributwert von "Name" und setze es an den String an
            <Text
            style={{
                      color: 'white',
                      backgroundColor: 'rgba(52, 52, 52, 0.8)',
                      paddingHorizontal:15,
                      paddingVertical:5,

                      position: 'absolute',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
            > {this.props.name}-Tour starten</Text>

        );
      }
  }