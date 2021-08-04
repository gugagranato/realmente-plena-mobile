import styled from 'styled-components/native'
import { colors } from '../../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 30px;
  background: ${colors.$white};
`
export const ImageContainer = styled.View`
  width: 100%;
`
export const LogoImage = styled.Image`
  align-self: center;
`
export const FormContainer = styled.View`
  width: 100%;
`
export const InputForm = styled.TextInput`
  color: ${colors.$fontDefault};
  padding: 20px 12px 4px;
  border-bottom-width: 1.5px;
  border-bottom-color: ${colors.$primaryDark};
  margin: 8px 0px;
  font-size: 18px;
`
export const SubmitButton = styled.TouchableOpacity``

export const JoinCredentialsText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.$primaryDark};
`
export const TextTouchableOpacity = styled.Text`
  text-align: center;
  margin-top: 24px;
  font-size: 18px;
  border: solid 1px ${colors.$primaryDark};
  border-radius: 4px;
  font-weight: 600;
  color: ${colors.$fontDefault};
  padding: 12px;
`
export const AboutButton = styled.Button`
  color: ${colors.$primary};
`
export const AboutButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ForgotPasswordButton = styled.TouchableOpacity`
  border: none;
`
