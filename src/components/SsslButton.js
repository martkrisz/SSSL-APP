import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text, TouchableHighlight } from 'react-native';
import SsslStyles from '../components/SsslStyles';

export default class SsslButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={"black"}
        style={[styles.button, this.props.style]}
        onPress={() => {
          if (this.props.onPress) {
            this.props.onPress();
          }
        }}
      >
        <Text style={[styles.buttonText, this.props.textStyle]}>
          {this.props.title && this.props.title}
        </Text>
      </TouchableHighlight>
    );
  }
}

SsslButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number
  ]),
  textStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number
  ])
};

const styles = EStyleSheet.create({
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 195.5,
    borderRadius: 2.5,
    height: 45,
    backgroundColor: '$ssslPrimaryColor'
  },
  buttonText: {
    fontSize: 20,
    color: '$ssslSecondaryColor',
    fontFamily: '$ssslFont'
  }
});