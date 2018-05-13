import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import Auth from '../Auth';
import { connectToDropbox } from '../actions/dropboxActions';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isConnected: false
    };

    this.auth = new Auth();
  }

  connectToDropbox = () => {
    //this.props.connectToDropbox();
    this.auth.login();
    this.setState({ isConnected: true });
  };

  getToken = () => {
    this.auth.getProfile((error, profile) => {
      console.log(profile);
    });
  };

  render() {
    return (
      <View style={{ width: 600 }}>
        <Button
          title={
            this.state.isConnected
              ? 'Se déconnecter de Dropbox'
              : 'Se connecter à Dropbox'
          }
          onPress={() => this.connectToDropbox()}
        />
        <Button title="Get Token" onPress={() => this.getToken()} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    connectToDropbox: () => dispatch(connectToDropbox())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
