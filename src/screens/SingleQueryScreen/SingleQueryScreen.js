import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RadioForm from 'react-native-simple-radio-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ActionCreators } from '../../actions/actions';
import styles from './styles';
import SsslTitleBar from '../../components/SsslTitleBar';
import SsslButton from '../../components/SsslButton';
import SsslTextInputField from '../../components/SsslTextInputField'
import renderIf from '../../utils/RenderUtil';

class SingleQueryScreen extends Component {

  constructor(props) {
    super(props);
    state: {
      isSubmitted: false;
    };
    response: [];
  }

  render() {

    const { query } = this.props;
    const { goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <SsslTitleBar
          title={query.name}
          backArrow={goBack}
        />
        <KeyboardAwareScrollView style={styles.body}>
          {this._renderItems(query.fields)}
          <SsslButton
            title="Küldés"
            onPress={() => this.send(query.id)}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }

  _renderItems(data) {

    return data.map((element, key) => {
      return (
        <View style={styles.field} key={key}>
          <Text style={styles.label}>{element.label}</Text>
          {renderIf(element.type === 'string',
            <SsslTextInputField
              errorShown={element.required}
              errorMessage="Kötelező mező"
              onChangeText={text => this.response.push(text)}
            />
          )}
          {renderIf(element.type === 'select' && element.multiple === false,
            <RadioForm
              style={styles.radioForm}
              radio_props={element.choices}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#3399FF'}
              animation={true}
              onPress={value => this.response.push(value)}
            />
          )}
        </View>
      )
    })
  }

  send(id) {
    const responseToSend = this.response.map(
      (element, index) => {
        return { 'id': index, 'value': element.toString() }
      }
    );

    this.props.sendQuery(id, responseToSend);
  }

}

SingleQueryScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  query: state.reducer.loadedSingleQuery.singleQuery
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleQueryScreen);