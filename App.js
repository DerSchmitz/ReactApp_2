import React, { Component } from 'react';
import { StyleSheet, Text,  AppRegistry, Image, View,  ScrollView, Animated } from 'react-native';
import { Dimensions }  from 'react-native';


// Import Components
import { TourCta } from  './src/components/tourCta/index';
import { Blink } from  './src/components/blink/index';
import { FadeInView } from  './src/components/fadeInView/index';

// Import Styles
//import { StyleSheet } from './styles/styles.js'
var styles = require('./styles/styles.js');




export default class HomeTest extends Component {
  render() {
      let topPic = {        uri: 'https://www.wallraf.museum/uploads/pics/sonntag_lebens-galerie-04.jpg'      }
        bottomPic = {       uri: 'https://www.wallraf.museum/uploads/pics/galerie-schatten_im_blick-04_01.jpg'      };

      return (


      <View style={styles.container}>

        <View style={styles.topNavContainer}>
            <Text style={styles.navText}>Wallraf-Richartz Museum</Text>
        </View>

        <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
         >

          <View style={styles.centerContainer}>
            <Image source={topPic}  style={styles.homeImage} />
              <TourCta name="Mode"  />

          </View>


          <View style={styles.centerContainer}>
            <Image source={bottomPic} style={styles.homeImage}/>
            <TourCta name="#"  />
          </View>

          <View style={styles.centerContainer}>


          <FadeInView style={styles.textContainer} >


            <Text>Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world! Hello world!
            </Text>
          </FadeInView>


          <View >
            <Blink text='Neue Touren verfügbar jeden Monat!!!!' />
          </View>


          <View >
              <Text>Vielen Dank für Ihr Interesse.</Text>
          </View>




          </View>



        </ScrollView>





      </View>
    );
  }
}



















