import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ActionCreators } from '../../actions/actions';
import SsslTitleBar from '../../components/SsslTitleBar';
import SsslTextInputField from '../../components/SsslTextInputField';
import SsslButton from '../../components/SsslButton';
import SsslStyles from '../../components/SsslStyles';
import styles from './styles';
import Images from '../../assets/img/Images';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      userName: '',
      password: '',

      isUserNameErrorShown: true,
      isPasswordErrorShown: true,
      isSubmitted: false
     };
  }

  passwordInputRef = null;

  componentDidMount() {
    
  }

  render() {

    onLoginButtonPress = () => {
      this.setState({isSubmitted: true}, () => this.login());
    };

    return (
      <View style={styles.container}>
        <SsslTitleBar
          title="BEJELENTKEZÉS"
        />
        <KeyboardAwareScrollView>
          <Image
            source={Images.images.ssslLogo}
            style={styles.stretchLogo}
            resizeMode="contain"
          />
          <View style={styles.body}>
            <SsslTextInputField
              placeholder="Felhasználónév"
              errorShown={this.state.isUserNameErrorShown && this.state.isSubmitted}
              errorMessage="Kötelező mező"
              onChangeText={text => this.setState({
                userName: text,
                isUserNameErrorShown: !this.state.userName
              })}
              returnKeyType="next"
              onSubmitEditing={(event) => {
                this.passwordInputRef.focus();
              }}
            />
            <SsslTextInputField
              ref={(component) => {
                this.passwordInputRef = component;
              }}
              placeholder="Jelszó"
              errorShown={this.state.isPasswordErrorShown && this.state.isSubmitted}
              errorMessage="Kötelező mező"
              onChangeText={text => this.setState({
                password: text,
                isPasswordErrorShown: !this.state.password
              })}
              secureTextEntry={true}
              onSubmitEditing={(event) => {
                this.onLoginButtonPress
              }}
            />
            <SsslButton
              title="Bejelentkezés"
              onPress={onLoginButtonPress}
              style={styles.loginButton}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }

  login = () => {
    if(this.state.isSubmitted && !this.state.isUserNameErrorShown && !this.state.isPasswordErrorShown) {
      //this.props.login({userName: this.state.userName, password: this.state.password});
      this.props.navigation.navigate("Home");
    }
  };
}

LoginScreen.propTypes = {};

const mapStateToProps = (state, props) => ({
  
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);