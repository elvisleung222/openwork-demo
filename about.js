import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Button } from 'native-base';

class AboutScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go back to JobList"
        onPress={() =>
          navigate('JobList');
        }
      />
    );
  }
}
