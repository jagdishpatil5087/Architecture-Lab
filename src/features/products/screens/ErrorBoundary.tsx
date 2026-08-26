import React from "react";
import { Button, Text, View } from "react-native";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error) {
    console.log("Product error:", error);
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Something went wrong</Text>

          <Button title="Retry" onPress={this.handleRetry} />
        </View>
      );
    }

    return this.props.children;
  }
}
