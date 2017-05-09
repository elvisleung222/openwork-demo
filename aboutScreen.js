import React from "react";
import { View, Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: '#d4e157'
 }
});
class AboutScreen extends React.Component {
 constructor(props) {
  super(props);
  this.goBack = this.goBack.bind(this);
 }
// static route = {
//   navigationBar: {
//    title: "About",
//   }
// }
goBack() {
  this.props.navigator.pop();
}
render() {
  return (
    <View style={styles.container}>
     <Text>Hello from About Page</Text>
     <Text onPress={this.goBack}>Go Back</Text>
    </View>
  )
 }
}
export default AboutScreen;
