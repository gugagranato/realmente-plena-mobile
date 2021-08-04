import React, { useCallback } from 'react'
import { Alert, View } from 'react-native'

import { Formik } from 'formik'
import { useAuthentication } from '../../../hooks/authentication'
import { DismissKeyboard } from '../../../components/dismissKeyboard/dismissKeyboard'
import logo from '../../../../assets/images/logo.png'
import {
  Container,
  LogoImage,
  ImageContainer,
  FormContainer,
  SubmitButton,
  InputForm,
  TextTouchableOpacity,
} from './styles'

const Signin = () => {
  const { signIn } = useAuthentication()
  const handleSignIn = useCallback(
    async (data) => {
      try {
        await signIn({
          email: data.email,
          password: data.password
        })
      } catch (err) {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.'
        )
      }
    },
    [signIn]
  )

  const form = () => (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => handleSignIn(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <InputForm
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            autoCorrect={false}
            keyboardType={'email-address'}
            placeholder="E-mail"
          />
          <InputForm
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Senha"
            secureTextEntry={true}
          />
          <SubmitButton onPress={handleSubmit}>
            <TextTouchableOpacity>Entrar</TextTouchableOpacity>
          </SubmitButton>
        </View>
      )}
    </Formik>
  )
  return (
    <DismissKeyboard>
      <Container>
        <ImageContainer>
          <LogoImage source={logo} />
        </ImageContainer>
        <FormContainer>
          {form()}
        </FormContainer>
      </Container>
    </DismissKeyboard>
  )
}

export default Signin
