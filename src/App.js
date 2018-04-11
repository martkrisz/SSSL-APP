import React, { PureComponent } from 'react';
import { View, BackHandler, Alert } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { addNavigationHelpers, NavigationActions, StackNavigator } from 'react-navigation';
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { enableBatching } from 'redux-batched-actions';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {reducer as network} from 'react-native-offline';
import {offlineActionTypes} from 'react-native-offline';
import {withNetworkConnectivity} from 'react-native-offline';
import {FullscreenLoader} from './components/FullscreenLoader';
import reducer from './reducers/reducers';
import Root from './Router';
import renderIf from './utils/RenderUtil';

const checkNetwork = (action) => {
  if (action.type === offlineActionTypes.CONNECTION_CHANGE && action.payload === false) {
    Alert.alert(
      'Hálózati hiba',
      'Nem található hálózat.',
      [
        { text: 'OK' },
      ],
      { cancelable: false }
    )
  }
};

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

EStyleSheet.build();

const AppNavigator = StackNavigator(Root, { headerMode: 'none' });

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  checkNetwork(action);
  return newState || state;
};

const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

@connect(state => ({
  nav: state.nav,
  global: state.reducer,
  network: state.network
}))
class ReduxNavigation extends PureComponent {

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;

    const addListener = createReduxBoundAddListener("root");

    const navigation = addNavigationHelpers({
      addListener,
      dispatch,
      state: nav
    });

    return (
      <View style={{ flex: 1 }}>
        <AppNavigator navigation={navigation} />
        {renderIf(
          this.props.global.showLoading.isFetching,
          <FullscreenLoader
            visible={this.props.global.showLoading.isFetching}
          />
        )}
      </View>
    )
  }
}

const appReducer = combineReducers({
  nav: navReducer,
  reducer,
  network
});

const rootReducer = (state, action) => {
  /*
   * ha lesz logout, itt kell resetelni a statet
  if (action.type === types.USER_LOGOUT) {
    state = undefined;
  }
  */
  return appReducer(state, action);
};

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      navMiddleware
    ),
  );
  return createStore(enableBatching(rootReducer), initialState, enhancer);
}

const store = configureStore({});

let NetworkApp = () => (
  <View style={{flex: 1}}>
    <ReduxNavigation />
  </View>
);

NetworkApp = withNetworkConnectivity({
  withRedux: true
})(NetworkApp);

export default function App(){
    return (
      <Provider store={store}>
          <NetworkApp/>
      </Provider>
    );
}
