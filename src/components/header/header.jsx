import React from 'react'
import { ImageBackground, View, TouchableOpacity, Text } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { useAuthentication } from '../../hooks/authentication'
import background from '../../../assets/images/background.jpg'

import { colors } from '../../styles/colors'
import {
  Container,
  Content,
  TitleText,
  HelloText,
  UserNameText
} from './styles'

const Header = ({
  title,
  height,
  backIcon,
  userName
}) => {
  const { signOut } = useAuthentication()
  const navigation = useNavigation()

  const ShowHello = (userName) => {
    if (userName) {
      return (
        <View>
          <HelloText>Olá, </HelloText>
          <UserNameText>{userName}</UserNameText>
        </View>
      )
    } else {
      return <TitleText>{title}</TitleText>
    }
  }

  return (
    <Container>
      <ImageBackground
        source={background}
        imageStyle={{ borderBottomRightRadius: 70 }}
        style={{ width: '100%', height: height || 110 }}
      >
        <Content>
          {backIcon === true && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={30} color={colors.$white} />
            </TouchableOpacity>
          )}
          {ShowHello(userName)}
        </Content>
      </ImageBackground>
    </Container>
  )
}

export default Header
