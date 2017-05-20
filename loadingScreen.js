import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import Expo, { Asset, Components }from 'expo';

class LoadingScreen extends React.Component {
  state = {
    isReady: false,
  };

  componentWillMount() {
    this._cacheResourcesAsync();
  }

  render() {
    if (!this.state.isReady) {
      return <Components.AppLoading />;
    }

    return (
      <View>
        <Image source={require('./assets/images/icon.png')} />
      </View>
    );
  }

  async _cacheResourcesAsync() {
    const images = [
      require('./assets/images/icon.png'),
    ];

    for (let image of images) {
      await Asset.fromModule(image).downloadAsync();
    }

    this.setState({isReady: true});
  }
}

export default LoadingScreen;
