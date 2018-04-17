import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions/actions';

import styles from './styles';
import SsslTitleBar from '../../components/SsslTitleBar';

class EventScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getEvents();
  }

  render() {

    return (
      <View style={styles.container}>
        <SsslTitleBar
          title="TÁBORJELENTKEZÉS"
        />
      </View>
    );
  }
}

EventScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  events: state.reducer.loadedEvents
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);