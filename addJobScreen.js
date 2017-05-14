// import { StyleSheet } from "react-native";
import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label,
  Button, Text, Picker, Header, Left, Body, Title,
  Icon, Right, Toast} from 'native-base';
import * as firebase from 'firebase';
// const styles = StyleSheet.create({
//  container: {
//   flex: 1,
//   justifyContent: "center",
//   alignItems: "center",
//   backgroundColor: '#d4e157'
//  }
// });
// Initialize Firebase
class AddJobScreen extends React.Component {
 constructor(props) {
  super(props);
  this.goBack = this.goBack.bind(this);
  this.state = {
    showToast: false,
    name: "",
    location: "",
    startDate: "",
    endDate: "",
    salaryPerDay: ""

  }
 }
goBack() {
  this.props.navigator.pop();
}

createJob(){
  console.log("Enter createJob");
  firebase.database().ref('jobs/').push({//stop-here : https://firebase.google.com/docs/reference/js/firebase.database.Reference

    // name: 'Test-name',
    // location: 'location',
    // startDate: '1/1/2017',
    // endDate: '1/2/2017',
    // salaryPerDay: '999'
  name: this.state.name,
  location: this.state.location,
  startDate: this.state.startDate,
  endDate: this.state.endDate,
  salaryPerDay: this.state.salaryPerDay
  });
}
render() {
  return (
    <Container>
        <Header style={{backgroundColor: '#d4e157'}}>
            <Left>
                <Button transparent onPress={this.goBack}>
                    <Icon name='arrow-back'/>
                </Button>
            </Left>
            <Body>
                <Title>+ 搵人開工</Title>
            </Body>
            <Right>
                <Text></Text>
            </Right>
        </Header>
        <Content>
            <Form>
                <Item floatingLabel>
                    <Label>工作名稱</Label>
                    <Input
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                    />
                </Item>
                <Item>
                    <Label>開工日期（開始）</Label>
                    <Input placeholder="DD/MM/YYYY"
                            onChangeText={(startDate) => this.setState({startDate})}
                            value={this.state.startDate}/>
                </Item>
                <Item>
                    <Label>開工日期（結束）</Label>
                    <Input placeholder="DD/MM/YYYY"
                            onChangeText={(endDate) => this.setState({endDate})}
                            value={this.state.endDate}/>
                </Item>
                <Item floatingLabel>
                    <Label>地點</Label>
                    <Input onChangeText={(location) => this.setState({location})}
                           value={this.state.location}/>
                </Item>
                <Item>
                    <Label>日  薪 （港幣） ＄</Label>
                    <Input placeholder="1000"
                    onChangeText={(salaryPerDay) => this.setState({salaryPerDay})}
                    value={this.state.salaryPerDay}/>
                </Item>
                <Button  onPress={()=>{
                  console.log("Clicked");
                  this.createJob();
                  Toast.show({
                              supportedOrientations:["portrait","portrait-upside-down","landscape","landscape-left","landscape-right"],
                              text:'成功新增工作！',
                              position: 'bottom',
                              buttonText: '知道'
                            });}} full success style={{ backgroundColor: '#d4e157' }}


                            >
                   <Text>確定</Text>
                </Button>

            </Form>
        </Content>
    </Container>
  )
 }
}
export default AddJobScreen;
