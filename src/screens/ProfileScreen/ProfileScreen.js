import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SsslTitleBar from '../../components/SsslTitleBar';

import { ActionCreators } from '../../actions/actions';
import styles from './styles';

class ProfileScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    return (
      <View style={styles.container}>
        <SsslTitleBar
          title="PROFILOM"
        />
      </View>
    );
  }
}

ProfileScreen.propTypes = {};

const mapStateToProps = (state, props) => ({

});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);