import styled from 'styled-components/native'
import { colors } from '../../styles/colors'

export const Container = styled.SafeAreaView`
  border-bottom-right-radius: 70px;
`
export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`
export const TitleText = styled.Text`
  flex-wrap: wrap;
  font-size: 26px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${colors.$white};
`
export const HelloText = styled.Text`
  font-size: 24px;
  color: ${colors.$white};
  font-weight: 300;
`
export const UserNameText = styled.Text`
  flex-wrap: wrap;
  font-size: 28px;
  font-weight: 700;
  color: ${colors.$white};
  text-transform: capitalize;
`
