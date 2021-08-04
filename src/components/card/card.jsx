import React from 'react'
import { StyleSheet, View } from 'react-native'

import { colors } from '../../styles/colors'

const CardComponent = (props) => {
  const styles = StyleSheet.create({
    card: {
      width: props.width,
      height: props.height,
      flexDirection: props.flexDirection || 'column',
      alignItems: props.alignItems || 'center',
      justifyContent: props.justifyContent || 'space-around',
      padding: props.padding || 20,
      marginTop: props.marginTop || 10,
      marginBottom: props.marginBottom || 10,
      marginRight: props.marginRight || 10,
      marginLeft: props.marginLeft || 10,
      borderRadius: 6,
      backgroundColor: colors.$white
    },
    shadow: {
      shadowColor: colors.$black,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    }
  })
  return <View style={[styles.shadow, styles.card]}>{props.children}</View>
}

export default CardComponent
