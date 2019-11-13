import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Container, Text, View, Button } from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createPost } from "./redux/actions/testAction";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { createPost, test } = this.props;
    return (
      <Container>
        <View>
          <Text>Posts Creation App</Text>
          <Button onPress={() => createPost()}>
            <Text>Create a new post</Text>
          </Button>
          <Button onPress={() => alert("Hello")}>
            <Text>View all posts</Text>
            {test && <Text>{test.msg}</Text>}
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default connect(
  state => ({ test: state.test }),
  dispatch => bindActionCreators({ createPost }, dispatch)
)(App);
