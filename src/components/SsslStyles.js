'use strict';

var React = require('react-native');

import EStyleSheet from 'react-native-extended-stylesheet';

module.exports = {

  variables: EStyleSheet.build({
    $ssslGrey: "rgb(228,228,228)",
    $ssslTextGrey: "rgb(105,105,105)",
    $ssslPrimaryColor: "rgb(51, 153, 255)",
    $ssslSecondaryColor: "white",
    $ssslFont: "HelveticaNeue",
    $ssslFont_Italic: "HelveticaNeue-Italic",
    $ssslFont_Bold: "HelveticaNeue-Bold",
    $ssslFont_Light: "HelveticaNeue-Light",
    $ssslFont_BoldItalic: "HelveticaNeue-BoldItalic",
    $ssslFont_LightItalic: "HelveticaNeue-LightItalic",
    $ssslBodyPadding: 50,
    $loadingBackground: 'rgba(0, 0 ,0, 0.5)',
  }),
  global: EStyleSheet.create({

  })
};