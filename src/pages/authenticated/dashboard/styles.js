import styled from 'styled-components/native'
import { colors } from '../../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.$white};
`
export const Content = styled.View`
  align-items: center;
  justify-content: space-around;
  padding: 45px;
  margin-top: -150px;
`
export const MenuContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 40px;
  align-items: center;
`
export const MenuItem = styled.TouchableOpacity`
  align-items: center;
`
export const TextItem = styled.Text`
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  color: ${colors.$fontDefault};
`
