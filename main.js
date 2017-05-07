import Expo from 'expo';
import React, {Component} from "react";
import { createRouter, NavigationProvider, StackNavigation } from "@expo/ex-navigation";
import JobsScreen from "./jobsScreen";
import AboutScreen from "./aboutScreen";
const Router = createRouter(() => ({
 home: () => JobsScreen,
 about: () => AboutScreen
}))
class App extends React.Component {
 render() {
  return (
   <NavigationProvider router={Router}>
    <StackNavigation initialRoute={Router.getRoute('home')} />
   </NavigationProvider>
  )
 }
};
Expo.registerRootComponent(App);
