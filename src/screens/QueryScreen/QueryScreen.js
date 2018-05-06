import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions/actions';

import styles from './styles';
import SsslTitleBar from '../../components/SsslTitleBar';
import SSSLButton from '../../components/SsslButton';
import renderIf from '../../utils/RenderUtil';

class QueryScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getQueries();
  }

  render() {

    const {queries} = this.props;

    return (
      <View style={styles.container}>
        <SsslTitleBar
          title="KÉRDŐÍVEK"
        />
        <ScrollView style={styles.body}>
          {this._renderItems(queries)}
        </ScrollView>
      </View>
    );
  }

  _renderItems(data) {

    return data.map((element, key) => {
      const deadline = new Date(element.deadline).toLocaleDateString();
      return (
        <View style={styles.query} key={key}>
          <Text style={styles.queryName}>{element.name}</Text>
          <Text>Határidő: {deadline}</Text>
          {renderIf(!element.isSubmitted,
            <SSSLButton
              title="Kitöltés"
              onPress={() => this.onFillPress(element.id)}
              style={styles.button}/>
          )}
          {renderIf(element.isSubmitted,
            <Text>Ezt a kérdőívet már kitöltötted</Text>
          )}
        </View>
      )
    })
  }

  onFillPress(id) {
    this.props.getSingleQuery(id);
  }

}

QueryScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  queries: state.reducer.loadedQueries.queries
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryScreen);