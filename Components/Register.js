import React, {Component} from 'react';
import {Text, View} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';



export default class Register extends Component{
   
   
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
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input />
                </Item>
                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Form>
              <Button full info>
            <Text>Register</Text>
          </Button>
            </Content>
          </Container>
        );
      }
    }