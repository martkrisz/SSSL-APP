import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SsslTitleBar from '../../components/SsslTitleBar';

import { ActionCreators } from '../../actions/actions';
import styles from './styles';

class QueryScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getQueries();
  }

  render() {

    return (
      <View style={styles.container}>
        <SsslTitleBar
          title="KÉRDŐÍVEK"
        />
      </View>
    );
  }
}

QueryScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  queries: state.reducer.loadedQueries
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryScreen);