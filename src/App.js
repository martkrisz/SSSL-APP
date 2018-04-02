import React, { PureComponent } from 'react';
import { View, BackHandler } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { addNavigationHelpers, NavigationActions, StackNavigator } from 'react-navigation';
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { enableBatching } from 'redux-batched-actions';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers/reducers';
import Root from './Router';

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

EStyleSheet.build();

const AppNavigator = StackNavigator(Root, { headerMode: 'none' });

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

@connect(state => ({
  nav: state.nav,
  global: state.reducer
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

    return <AppNavigator navigation={navigation} />;
  }
}

const appReducer = combineReducers({
  nav: navReducer,
  reducer
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

export default function App(){
    return (
      <Provider store={store}>
          <ReduxNavigation/>
      </Provider>
    );
}
