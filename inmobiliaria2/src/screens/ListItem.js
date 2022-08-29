import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const ListItem = ({ item }) => {

  const { id, image, nombre, direccion, habitaciones, banos, superficie, costo, calificacion } = item
  console.log(image)

  return (
    <View style={style.containerBox}>


      <Image source={{ uri: image }}
        style={style.image} />


      <View style={style.titleView}>

        <Text style={style.title}>{nombre}</Text>

        <View style={style.direction}>
          <Icon style={style.iconDirection} name='map-marker-alt' size={20} color={'black'} />
          <Text style={style.directionText}>{direccion}</Text>
        </View>

        <View style={style.description}>
          <View style={style.description}>
            <Ionicons style={style.iconDirection} name='bed-outline' size={23} />
            <Text>{habitaciones}</Text>
          </View>

          <View style={style.description}>
            <Icon style={style.iconDirection} name='bath' size={18} />
            <Text>{banos}</Text>
          </View>

          <View style={style.description}>
            <MaterialCommunityIcons style={style.iconDirection} name='move-resize' size={23} />
            <Text style={style.directionText}>{superficie} ft² </Text>
          </View>

        </View>

        <View>
        </View>

      </View>
    </View>
  )
}



