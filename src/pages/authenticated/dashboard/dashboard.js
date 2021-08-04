import * as React from 'react'
import { Alert, Text, TouchableOpacity } from 'react-native'
import {
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Entypo
} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { useAuthentication } from '../../../hooks/authentication'
import Header from '../../../components/header/header'

import { colors } from '../../../styles/colors'
import { Container, Content, MenuContainer, MenuItem, TextItem } from './styles'
import CardComponent from '../../../components/card/card'

const MsgAlert = () => {
  Alert.alert('Atenção', 'Em desenvolvimento')
}

const Dashboard = ({ navigation }) => {
  const { user, signOut } = useAuthentication()

  return (
    <Container>
      <Header userName={user?.username} backIcon={false} height={250} />

      <Content>
        <MenuContainer>
          <CardComponent
            width={110}
            height={110}
            padding={15}
            marginBottom={20}
            justifyContent="center"
          >
            <MenuItem onPress={() => navigation.navigate('Pets')}>
              <Ionicons name="md-fitness-outline" size={42} color={colors.$primaryDark } />
              <Text>Daytox</Text>
            </MenuItem>
          </CardComponent>
          <CardComponent
            onPress={MsgAlert}
            width={110}
            height={110}
            padding={15}
            marginBottom={20}
            justifyContent="center"
          >
            <MenuItem >
              <Entypo name="chat" size={42} color={colors.$primaryDark } />
              <TextItem>Temperamentos</TextItem>
            </MenuItem>
          </CardComponent>
          <CardComponent
            width={110}
            height={110}
            padding={15}
            marginBottom={20}
            justifyContent="center"
          >
            <MenuItem onPress={() => navigation.navigate('Schedules')}>
              {/* <MenuItem onPress={MsgAlert}> */}
              <FontAwesome name="calendar" size={42} color={colors.$primaryDark } />
              <TextItem>Sem Glútem</TextItem>
            </MenuItem>
          </CardComponent>
          <CardComponent
            onPress={() => navigation.navigate('Signatures')}
            width={110}
            height={110}
            padding={15}
            marginBottom={20}
            justifyContent="center"
          >
            <MenuItem >
              <MaterialIcons
                name="assignment-turned-in"
                size={42}
                color={colors.$primaryDark }
              />
              <TextItem>Sem caseína</TextItem>
            </MenuItem>
          </CardComponent>
          <CardComponent
            width={110}
            height={110}
            padding={15}
            marginBottom={20}
            justifyContent="center"
          >
            <MenuItem onPress={() => navigation.navigate('Finances')}>
            <MaterialCommunityIcons name="weight-kilogram"
                size={42}
                color={colors.$primaryDark }
              />
              <TextItem>Emagrecimento</TextItem>
            </MenuItem>
          </CardComponent>
          <CardComponent
            width={110}
            height={110}
            padding={15}
            marginBottom={20}
            justifyContent="center"
          >
            <MenuItem onPress={MsgAlert}>
              <FontAwesome5
                name="map-marked-alt"
                size={42}
                color={colors.$primaryDark }
              />
              <TextItem>Conteúdo gratuito</TextItem>
            </MenuItem>

          </CardComponent>
          <CardComponent
            width={260}
            height={60}
            padding={15}
            marginBottom={20}
            justifyContent="center"
          >
            <TouchableOpacity 
              onPress={() => signOut()} style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 8, fontWeight: '500'}}>Sair</Text>
              <FontAwesome5
                name="sign-out-alt"
                size={30}
                color={colors.$primaryDark }
              />
            </TouchableOpacity>

          </CardComponent>
        </MenuContainer>
      </Content>
    </Container>
  )
}

export default Dashboard
