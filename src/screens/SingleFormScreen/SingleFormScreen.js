import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions/actions';
import RadioForm from 'react-native-simple-radio-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SsslTitleBar from '../../components/SsslTitleBar';
import SsslButton from '../../components/SsslButton';
import SsslTextInputField from '../../components/SsslTextInputField'
import renderIf from '../../utils/RenderUtil';
import styles from './styles';

class SingleFormScreen extends Component {

  constructor(props) {
    super(props);
    state: {
      isSubmitted: false
      response: []
    };
  }

  render() {

    const { form } = this.props;
    const { goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <SsslTitleBar
          title={form.name}
          backArrow={goBack}
        />
        <KeyboardAwareScrollView style={styles.body}>
          {this._renderItems(form.fields)}
          <SsslButton
            title="Küldés"
            onPress={() => this.send(form.id)}
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
              onChangeText={text => this.state.response.push(text).bind(this)}
            />
          )}
          {renderIf(element.type === 'select' && element.multiple === false,
            <View style={styles.radioForm}>
              <RadioForm
                radio_props={element.choices}
                initial={0}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'#3399FF'}
                animation={true}
                onPress={value => this.state.response.push(value).bind(this)}
              />
            </View>
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

    this.props.sendForm(id, responseToSend);
  }
}

SingleFormScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  form: state.reducer.loadedSingleForm.singleForm
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFormScreen);