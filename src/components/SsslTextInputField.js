import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TextInput, View } from 'react-native';
import SsslInlineError from '../components/SsslInlineError';
import renderIf from '../utils/RenderUtil';

export default class SsslTextInputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          ref={'textInput'}
          style={styles.textInput}
          autoCapitalize='none'
          placeholder={this.props.placeholder}
          placeholderTextColor='rgb(104,105,105)'
          underlineColorAndroid='transparent'
          secureTextEntry={this.props.secureTextEntry}
          onChangeText={this.props.onChangeText}
          keyboardType={this.props.keyboardType ? this.props.keyboardType : 'default'}
          returnKeyType={this.props.returnKeyType ? this.props.returnKeyType : 'done'}
          onSubmitEditing={this.props.onSubmitEditing}
          onBlur={this.props.onBlur}
          value={this.props.value}
          onFocus={this.props.onFocus}
          maxLength={this.props.maxLength}
        />
        {renderIf(this.props.errorShown,
          <SsslInlineError
            title={this.props.errorMessage}
          />
        )}
      </View>
    );
  }

  focus() {
    this.refs.textInput.focus();
  }
}

SsslTextInputField.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  errorShown: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChangeText: PropTypes.func,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number
  ])
};

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 13,
  },
  textInput: {
    height: 42,
    borderRadius: 2.5,
    paddingLeft: 15,
    backgroundColor: '$ssslGrey',
    fontFamily: '$ssslFont',
    color: 'black',
  }
});