import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Button, Body, Right, Icon, Title, Content, ListItem, Text, CheckBox } from 'native-base';

class App extends React.Component {
  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#d4e157' }}>
              <Left>
                  <Button transparent light>
                      <Text style={{ fontSize: 15 }}>關於</Text>
                  </Button>
              </Left>
              <Body>
                  <Title>Openwork</Title>
              </Body>
              <Right>
                  <Button transparent iconLeft light>
                      <Icon name='person' style={{ fontSize: 15 }}/>
                      <Text style={{ fontSize: 15 }}>雇主</Text>
                  </Button>
              </Right>
          </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
