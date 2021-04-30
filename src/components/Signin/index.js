import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'

const Signin = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>muser</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Hesabına giriş yap</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Şifre</FormLabel>
                        <FormInput type='sifre' required />
                        <FormButton type='submit'>Devam Et</FormButton>
                        <Text>Şifremi Unuttum</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default Signin
