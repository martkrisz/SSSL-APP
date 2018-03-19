import EStyleSheet from "react-native-extended-stylesheet";
import {Dimensions} from 'react-native';
import SsslStyles from '../../components/SsslStyles';

const {width, height} = Dimensions.get('window');

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$ssslSecondaryColor"
  },
  stretchLogo: {
    width: width,
    height: height * 0.3,
    marginTop: 50
  },
  body: {
    padding: "$ssslBodyPadding"
  },
  loginButton: {
    marginTop: 20
  }
});