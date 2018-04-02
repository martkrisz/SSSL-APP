import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SsslTitleBar from '../../components/SsslTitleBar';

import { ActionCreators } from '../../actions/actions';
import styles from './styles';
import renderIf from '../../utils/RenderUtil';

class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nickName: "Müzli",
      rank: "Senior",
      color: "TTNY",
      joiningYear: "2014",
      email: "lycan@sch.bme.hu",
      phoneNumber: "+36303352244",
      room: "1701",
      address: undefined
    };
  }

  componentDidMount() {
    
  }

  render() {

    return (
      <View style={styles.container}>
        <SsslTitleBar
          title="PROFILOM"
        />
        <View style={styles.body}>
          {this._renderListItem("Becenév", this.state.nickName)}
          {this._renderListItem("Rang", this.state.rank)}
          {this._renderListItem("Gárda", this.state.color)}
          {this._renderListItem("Csatlakozás éve", this.state.joiningYear)}
          {this._renderListItem("E-mail cím", this.state.email)}
          {this._renderListItem("Telefonszám", this.state.phoneNumber)}
          {this._renderListItem("Szobaszám", this.state.room)}
          {this._renderListItem("Lakcím", this.state.address)}
        </View>
      </View>
    );
  }

  _renderListItem(title, data) {
    return(
      renderIf(
        data != undefined, 
        <View style={styles.dataRow}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.dataStyle}>{data}</Text>
        </View>
      )
    );
  }
}

ProfileScreen.propTypes = {};

const mapStateToProps = (state, props) => ({

});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);