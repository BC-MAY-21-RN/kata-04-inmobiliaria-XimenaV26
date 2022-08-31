import { View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import { data } from '../data/data'
import { ListItem } from '../screens'

export const Card = () => {
  return (
    <SafeAreaView style={style.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} />}

      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  mainContainer:{
    //flex: 1,
    width: '100%',
    height: '100%'

    
  }

})