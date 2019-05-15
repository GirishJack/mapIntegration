import React, {Component} from 'react';
import {Text, View} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';



export default class Login extends Component{
   
   
      render() {
        return (
          <Container>
            <Header><Text>Login</Text></Header>
            <Content>
              <Form>
                <Item floatingLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Form>
              <Button onPress={this.props.navigation.navigate('Geolocation')}full info>
            <Text>Login</Text>
          </Button>
            </Content>
          </Container>
        );
      }
    }