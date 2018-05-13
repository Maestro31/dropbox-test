import createBrowserHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import Home from './components/Home';
import configureStore from './configureStore';

const Page = props => <View {...props} />;

const history = createBrowserHistory();
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route
              path="/second"
              component={() => (
                <Page>
                  <Text>Second Page</Text>
                </Page>
              )}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
