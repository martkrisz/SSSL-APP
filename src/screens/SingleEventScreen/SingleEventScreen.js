import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../../actions/actions';
import styles from './styles';

class SingleEventScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

SingleEventScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  event: state.reducer.loadedEvents.singleEvent
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleEventScreen);