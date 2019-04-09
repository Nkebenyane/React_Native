
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';

import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import LoginScreen from './src/pages/Login';
import BoardScreen from './src/pages/Board';
import ProjectsScreen from './src/pages/Projects';
import GoalsScreen from './src/pages/Goals';
import ProfileScreen from './src/pages/Profile';


const App = () => {
  return (
    <Container>
      <View>
        <StatusBar
          backgroundColor="#B41212"
        />
      </View>
      <Router>
        <Scene key="root" hideNavBar={true} >
          <Scene key="Login"
            component={LoginScreen}
            title="Login" 
            initial
          />
          <Scene
            key="Board"
            component={BoardScreen}
            title="Leader Board"
          />
          <Scene
            key="Projects"
            component={ProjectsScreen}
            title="Projects"
          />
          <Scene
            key="Goals"
            component={GoalsScreen}
            title="Goals"
          />
          <Scene
            key="Profile"
            component={ProfileScreen}
            title="Profile"
          />
        </Scene>
      </Router>

    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
