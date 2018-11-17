import React, { Component } from 'react';
import { StyleSheet, Text,  AppRegistry, Image, View,  ScrollView, Animated } from 'react-native';
import { Dimensions }  from 'react-native';



const win = Dimensions.get('window');

'use strict';




module.exports = StyleSheet.create({

  textContainer: {
    paddingVertical:10 ,
    paddingHorizontal: 10,

  },

  centerContainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },



  topNavContainer: {
    width: win.width,
    paddingVertical:10 ,
    paddingHorizontal: 10,
    paddingTop: 30,
    backgroundColor: '#ccc',
  },
  navText : {
    fontSize: 20,
    color: '#000',
  },
  homeImage: {
    marginTop:0,
    width: win.width,
    height: win.height/2-30,
    resizeMode: 'cover',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});