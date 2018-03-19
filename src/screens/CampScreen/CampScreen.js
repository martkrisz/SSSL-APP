import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../../actions/actions';
import styles from './styles';

class CampScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { text: "Type here" };
  }

  componentDidMount() {
    this.props.test('redux works');
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.label}</Text>
      </View>
    );
  }
}

CampScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  label: state.SampleReducer.text
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CampScreen);