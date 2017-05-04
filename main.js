import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, ListView, FlatList, Image} from 'react-native';
import { Container, Header, Left, Button, Body, Right, Icon, Title, Content,
          ListItem, Text, CheckBox, List, Card, CardItem} from 'native-base';
import {
            createRouter,
            NavigationProvider,
            StackNavigation,
          } from '@expo/ex-navigation';
// import { AboutScreen } from './about';

const Router = createRouter(() => ({
            home: () => JobListScreen,
            about: () => AboutScreen,
          }));

class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}


class JobListScreen extends React.Component {
  constructor(){
    super();
    const icons = [
    require('./assets/images/jobImg1.jpg'),
    require('./assets/images/jobImg2.jpg'),
    require('./assets/images/jobImg3.jpg'),
    require('./assets/images/jobImg4.jpg'),
    require('./assets/images/jobImg5.jpg'),
    require('./assets/images/jobImg6.jpg')
    ];
    const jobs =
    [{"key":1,"name":"平水及測量","startDate":"1-Apr","endDate":"3-Apr","location":"離 島","salaryPerDay":2720},
    {"key":2,"name":"模板","startDate":"2-Apr","endDate":"4-Apr","location":"葵 青","salaryPerDay":1625},
    {"key":3,"name":"油漆","startDate":"3-Apr","endDate":"5-Apr","location":"油 尖 旺","salaryPerDay":1785},
    {"key":4,"name":"金屬工","startDate":"4-Apr","endDate":"6-Apr","location":"黃 大 仙","salaryPerDay":2981},
    {"key":5,"name":"雕刻木器","startDate":"5-Apr","endDate":"7-Apr","location":"大 埔","salaryPerDay":3189},
    {"key":6,"name":"金屬棚架","startDate":"6-Apr","endDate":"8-Apr","location":"深 水 埗","salaryPerDay":1758},
    {"key":7,"name":"油漆","startDate":"7-Apr","endDate":"9-Apr","location":"灣 仔","salaryPerDay":4522},
    {"key":8,"name":"雲石","startDate":"8-Apr","endDate":"10-Apr","location":"屯 門","salaryPerDay":2478},
    {"key":9,"name":"扎鐵","startDate":"9-Apr","endDate":"11-Apr","location":"西 貢","salaryPerDay":2652},
    {"key":10,"name":"電器","startDate":"10-Apr","endDate":"12-Apr","location":"深 水 埗","salaryPerDay":1549},
    {"key":11,"name":"木匠","startDate":"11-Apr","endDate":"13-Apr","location":"九 龍 城","salaryPerDay":1501},
    {"key":12,"name":"雕刻木器","startDate":"12-Apr","endDate":"14-Apr","location":"油 尖 旺","salaryPerDay":1690},
    {"key":13,"name":"喉管","startDate":"13-Apr","endDate":"15-Apr","location":"元 朗","salaryPerDay":3251},
    {"key":14,"name":"木匠","startDate":"14-Apr","endDate":"16-Apr","location":"東 區","salaryPerDay":2162},
    {"key":15,"name":"喉管","startDate":"15-Apr","endDate":"17-Apr","location":"中 西 區","salaryPerDay":1967},
    {"key":16,"name":"油漆","startDate":"16-Apr","endDate":"18-Apr","location":"屯 門","salaryPerDay":3838},
    {"key":17,"name":"天花間隔","startDate":"17-Apr","endDate":"19-Apr","location":"灣 仔","salaryPerDay":2729},
    {"key":18,"name":"金屬工","startDate":"18-Apr","endDate":"20-Apr","location":"黃 大 仙","salaryPerDay":4332},
    {"key":19,"name":"雕刻木器","startDate":"19-Apr","endDate":"21-Apr","location":"觀 塘","salaryPerDay":1494},
    {"key":20,"name":"扎鐵","startDate":"20-Apr","endDate":"22-Apr","location":"中 西 區","salaryPerDay":3388},
    {"key":21,"name":"挖掘機","startDate":"21-Apr","endDate":"23-Apr","location":"九 龍 城","salaryPerDay":1463},
    {"key":22,"name":"混凝土","startDate":"22-Apr","endDate":"24-Apr","location":"西 貢","salaryPerDay":2213},
    {"key":23,"name":"扎鐵","startDate":"23-Apr","endDate":"25-Apr","location":"屯 門","salaryPerDay":2371},
    {"key":24,"name":"電器","startDate":"24-Apr","endDate":"26-Apr","location":"元 朗","salaryPerDay":4034},
    {"key":25,"name":"木匠","startDate":"25-Apr","endDate":"27-Apr","location":"觀 塘","salaryPerDay":3832},
    {"key":26,"name":"搭棚","startDate":"26-Apr","endDate":"28-Apr","location":"屯 門","salaryPerDay":2679},
    {"key":27,"name":"木匠","startDate":"27-Apr","endDate":"29-Apr","location":"灣 仔","salaryPerDay":2846},
    {"key":28,"name":"泥水","startDate":"28-Apr","endDate":"30-Apr","location":"荃 灣","salaryPerDay":1397},
    {"key":29,"name":"天花間隔","startDate":"29-Apr","endDate":"1-May","location":"離 島","salaryPerDay":1756},
    {"key":30,"name":"天花間隔","startDate":"30-Apr","endDate":"2-May","location":"沙 田","salaryPerDay":3871},
    {"key":31,"name":"木匠","startDate":"1-May","endDate":"3-May","location":"南 區","salaryPerDay":3869},
    {"key":32,"name":"金屬棚架","startDate":"2-May","endDate":"4-May","location":"中 西 區","salaryPerDay":2544},
    {"key":33,"name":"喉管","startDate":"3-May","endDate":"5-May","location":"荃 灣","salaryPerDay":2684},
    {"key":34,"name":"木匠","startDate":"4-May","endDate":"6-May","location":"西 貢","salaryPerDay":2421},
    {"key":35,"name":"木匠","startDate":"5-May","endDate":"7-May","location":"南 區","salaryPerDay":2871},
    {"key":36,"name":"泥水","startDate":"6-May","endDate":"8-May","location":"東 區","salaryPerDay":4835},
    {"key":37,"name":"喉管","startDate":"7-May","endDate":"9-May","location":"東 區","salaryPerDay":3323},
    {"key":38,"name":"雲石","startDate":"8-May","endDate":"10-May","location":"沙 田","salaryPerDay":3679},
    {"key":39,"name":"雕刻木器","startDate":"9-May","endDate":"11-May","location":"沙 田","salaryPerDay":3280},
    {"key":40,"name":"模板","startDate":"10-May","endDate":"12-May","location":"油 尖 旺","salaryPerDay":3926},
    {"key":41,"name":"喉管","startDate":"11-May","endDate":"13-May","location":"油 尖 旺","salaryPerDay":4696},
    {"key":42,"name":"金屬工","startDate":"12-May","endDate":"14-May","location":"東 區","salaryPerDay":4754},
    {"key":43,"name":"平水及測量","startDate":"13-May","endDate":"15-May","location":"西 貢","salaryPerDay":3007},
    {"key":44,"name":"天花間隔","startDate":"14-May","endDate":"16-May","location":"觀 塘","salaryPerDay":3545},
    {"key":45,"name":"雕刻木器","startDate":"15-May","endDate":"17-May","location":"離 島","salaryPerDay":3830},
    {"key":46,"name":"金屬棚架","startDate":"16-May","endDate":"18-May","location":"大 埔","salaryPerDay":2302},
    {"key":47,"name":"金屬棚架","startDate":"17-May","endDate":"19-May","location":"北 區","salaryPerDay":2024},
    {"key":48,"name":"模板","startDate":"18-May","endDate":"20-May","location":"北 區","salaryPerDay":3487},
    {"key":49,"name":"平水及測量","startDate":"19-May","endDate":"21-May","location":"深 水 埗","salaryPerDay":1001},
    {"key":50,"name":"油漆","startDate":"20-May","endDate":"22-May","location":"九 龍 城","salaryPerDay":3947}]
    this.state = {
      jobs: jobs,
      icons: icons
    };
  }

  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#d4e157' }}>
              <Left>
                  <Button transparent light>
                      <Text style={{ fontSize: 15 }} onPress={() => this.props.navigator.push('about')}>關於</Text>
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
          <Content>
              <FlatList
                data={this.state.jobs}
                renderItem={({item}) =>
                <Card>
                <CardItem>
                <Image
                                  style={{ width:70, height:70, marginRight: 13}}
                                  source = {this.state.icons[Math.floor(Math.random()*this.state.icons.length)]}
                                  />
                    <Text>
                        <Text style={{fontWeight: 'bold'}}>{item.name}{"\n"}</Text>
                        {item.startDate} 至 {item.endDate}{"\n"}
                        {item.location}{"\n"}
                        $ {item.salaryPerDay} / 日
                    </Text>

                    <Right><Icon name="arrow-forward" /></Right>
                </CardItem></Card>

              }
              />
          </Content>
      </Container>
    );
  }
}

class AboutScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  render() {
    return (
      <Text>This is about page.</Text>
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
