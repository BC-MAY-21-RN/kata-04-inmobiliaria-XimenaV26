import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Card} from "../screens"

export const Main = () => {
  return (
    <View style={style.container}>
      <Card>
      </Card>
       
      
      
    
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    //Eje horizontal 
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    //Eje vertical 
    justifyContent: 'flex-start',
    padding: 20,
  },
  
})