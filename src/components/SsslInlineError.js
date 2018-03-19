import React, {Component} from "react";
import PropTypes from "prop-types";
import EStyleSheet from "react-native-extended-stylesheet";
import {View, Text} from "react-native";
import SsslStyles from '../components/SsslStyles';

export default class SsslInlineError extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.errorText}>{this.props.title}</Text>
      </View>
    );
  }
}

SsslInlineError.propTypes = {
  title: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number
  ])
};

const styles = EStyleSheet.create({
  errorText: {
    fontSize: 10,
    color: "$ssslPrimaryColor",
    fontWeight: "600",
    paddingLeft: 15,
    marginTop: 7,
    marginBottom: -7
  }
});