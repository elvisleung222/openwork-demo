import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Button, Body, Right, Icon, Title, Content, ListItem, Text, CheckBox } from 'native-base';

class App extends React.Component {
  render() {
    return (
      <Container>
          <Header>
              <Left>
                  <Button transparent>
                      <Icon name='arrow-back' />
                  </Button>
              </Left>
              <Body>
                  <Title>Header</Title>
              </Body>
              <Right>
                  <Button transparent>
                      <Icon name='menu' />
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
