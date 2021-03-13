import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class FirstScreen extends Component {
  
  render() {
    return (
      <>
        <FirstChildScreen name="Munkustrap" />
        <FirstChildScreen name="Spot" />
      </>
    );
  }
}

// export default  Cafe;



class FirstChildScreen extends Component {

  state = { isHungry: true };

  render(props) {
    return (
      <View>
        <Text>
          I am {this.props.name}, and I am
          {this.state.isHungry ? " hungry" : " full"}!
        </Text>
        <Button
          onPress={() => {
            this.setState({ isHungry: false });
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"
          }
        />
      </View>
    );
  }
}

const WelcomeText = () => {
  const name = "Andy";
  return (
    <Text>Welcome {name}!</Text>
  );
}

//export default FirstScreen;