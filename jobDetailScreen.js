import React, { Component } from 'react';
import { StyleSheet, ListView, FlatList, Image} from 'react-native';
import { Container, Header, Left, Button, Body, Right, Icon, Title, Content,
          ListItem, Text, CheckBox, List, Card, CardItem} from 'native-base';


class JobDetailScreen extends React.Component {
  constructor(props) {
   super(props);
   this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#d4e157' }}>
              <Left>
                <Button transparent onPress={this.goBack}>
                    <Icon name='arrow-back'/>
                </Button>
              </Left>
              <Body>
                  <Title>Job Details</Title>
              </Body>
              <Right></Right>
          </Header>
          <Content>
            <Text>

              {this.props.route.params.detail.key} {'\n'}
              {this.props.route.params.detail.name} {'\n'}
              {this.props.route.params.detail.location} {'\n'}
              {this.props.route.params.detail.startDate} {'\n'}
              {this.props.route.params.detail.endDate} {'\n'}
              {this.props.route.params.detail.salaryPerDay} {'\n'}
            </Text>
            <Button><Text>留電話</Text></Button>
          </Content>
      </Container>
    );
  }
}
export default JobDetailScreen;
