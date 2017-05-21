import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, ListView, FlatList, Image, TouchableOpacity, Animated} from 'react-native';
import { Container, Header, Left, Button, Body, Right, Icon, Title, Content,
          ListItem, Text, CheckBox, List, Card, CardItem} from 'native-base';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD185WICCBvkMkIgGfYZPYIxBBcLx3FFYw",
  authDomain: "openwork-676d6.firebaseapp.com",
  databaseURL: "https://openwork-676d6.firebaseio.com",
  storageBucket: "openwork-676d6.appspot.com>"
};


firebase.initializeApp(firebaseConfig);

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
class JobsScreen extends React.Component {

  constructor(props){
    super(props);
    this.goToAbout = this.goToAbout.bind(this);
    this.goToAddJob = this.goToAddJob.bind(this);
    this.goToJobDetail = this.goToJobDetail.bind(this);
    const icons = [
    require('./assets/images/jobImg1.jpg'),
    require('./assets/images/jobImg2.jpg'),
    require('./assets/images/jobImg3.jpg'),
    require('./assets/images/jobImg4.jpg'),
    require('./assets/images/jobImg5.jpg'),
    require('./assets/images/jobImg6.jpg')
    ];

    var jobs = firebase.database().ref().child('jobs').on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          key: child.key,
          name: child.val().name,
          location: child.val().location,
          startDate: child.val().startDate,
          endDate: child.val().endDate,
          salaryPerDay: child.val().salaryPerDay
        });
      });

      this.setState({
        jobs: items
      });

    });;
    console.log(jobs);
    this.state = {
      icons: icons
    };
  }



  goToAbout() {
    this.props.navigator.push('about');
  }
  goToAddJob() {
    this.props.navigator.push('addJob');
  }
  goToJobDetail(item) {
    this.props.navigator.push('jobDetail', {detail: item});
  }
  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#d4e157' }}>
              <Left>
                  <Button transparent light onPress={this.goToAbout}>
                      <Text style={{ fontSize: 15 }} >關於</Text>
                  </Button>
              </Left>
              <Body>
                  <Title>Openwork</Title>
              </Body>
              <Right>
                  <Button transparent iconLeft light onPress={this.goToAddJob}>
                      <Text style={{ fontSize: 15 }}>+ 搵人開工</Text>
                  </Button>
              </Right>
          </Header>
          <Content>
              <AnimatedFlatList
                data={this.state.jobs}
                onRefresh={this._onRefresh}
                refreshing={false}
                onEndReached={this._onEndReached}
                renderItem={this._renderItemComponent}
              />
          </Content>
      </Container>
    );
  }
  _onRefresh = () => console.log('onRefresh: nothing to refresh :P');
  _onEndReached = () => console.log('onRefresh: nothing to refresh :P');
  _renderItemComponent = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.goToJobDetail(item)} activeOpacity={0.4} focusedOpacity={0.8}>
        <Card>
          <CardItem>
          <Image style={{ width:70, height:70, marginRight: 13}}
                 source = {this.state.icons[Math.floor(Math.random()*this.state.icons.length)]}/>
              <Text>
                  <Text style={{fontWeight: 'bold'}}>{item.name}{"\n"}</Text>
                  {item.startDate} 至 {item.endDate}{"\n"}
                  {item.location}{"\n"}
                  $ {item.salaryPerDay} / 日
              </Text>
              <Right><Icon name="arrow-forward" /></Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  };
}
export default JobsScreen;
