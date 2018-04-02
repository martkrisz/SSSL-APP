import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$ssslSecondaryColor"
  },
  body: {
    paddingLeft: 20,
    paddingTop: 50
  },
  dataRow: {
    marginBottom: 8
  },
  titleStyle: {
    color: "$ssslTextGrey",
    fontSize: 15,
    lineHeight: 20.3
  },
  dataStyle: {
    color: "$ssslPrimaryColor",
    fontSize: 17.3,
    lineHeight: 26
  }
});