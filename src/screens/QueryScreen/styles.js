import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$ssslSecondaryColor"
  },

  body: {
    paddingVertical: "$ssslBodyPadding",
    paddingHorizontal: 20
  },

  query: {
    marginBottom: 20
  },

  queryName: {
    fontSize: 25,
    color: "$ssslPrimaryColor",
    marginBottom: 5
  },

  button: {
    marginTop: 20
  }
});