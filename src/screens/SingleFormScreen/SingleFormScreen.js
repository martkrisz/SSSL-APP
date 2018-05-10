import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../../actions/actions';
import styles from './styles';

class SingleFormScreen extends Component {

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

SingleFormScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  form: state.reducer.loadedEvents.singleForm
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFormScreen);