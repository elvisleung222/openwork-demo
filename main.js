import Expo from 'expo';
import React, {Component} from "react";
import { createRouter, NavigationProvider, StackNavigation } from "@expo/ex-navigation";
import JobsScreen from "./jobsScreen";
import AboutScreen from "./aboutScreen";
import AddJobScreen from "./addJobScreen";
import JobDetailScreen from "./jobDetailScreen";
import LoadingScreen from "./loadingScreen";
const Router = createRouter(() => ({
 home: () => JobsScreen,
 about: () => AboutScreen,
 addJob: () => AddJobScreen,
 jobDetail: () => JobDetailScreen,
 loading: ()=> LoadingScreen
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
