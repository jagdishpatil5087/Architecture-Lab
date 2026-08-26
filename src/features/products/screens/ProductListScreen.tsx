import { Suspense } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProductList from "../components/ProductList";
import { ErrorBoundary } from "./ErrorBoundary";

const ProductListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContent}>
        <ErrorBoundary>
          <Suspense fallback={<Text>Loading...</Text>}>
            <ProductList />
          </Suspense>
        </ErrorBoundary>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F5",
  },

  scrollContent: {
    padding: 20,
  },
});

export default ProductListScreen;
