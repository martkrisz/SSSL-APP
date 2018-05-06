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

  formName: {
    fontSize: 25,
    color: "$ssslPrimaryColor",
    marginBottom: 5
  },

  buttonSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },
  
  applyButton: {
    width: 150,
    marginBottom: 20,
    backgroundColor: "green"
  },

  deleteButton: {
    width: 150,
    marginBottom: 20,
    backgroundColor: "red"
  },

  modifyButton: {
    width: 150,
    marginBottom: 20,
    backgroundColor: "orange"
  },
});