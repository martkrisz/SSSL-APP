import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../../actions/actions';
import styles from './styles';
import SsslTitleBar from '../../components/SsslTitleBar';

class CampScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

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

CampScreen.propTypes = {};

const mapStateToProps = (state, props) => ({

});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CampScreen);