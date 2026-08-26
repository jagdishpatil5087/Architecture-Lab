import { use } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { productsPromise } from "../api/product.api";
import ProductCard from "./ProductCard";
const ProductList = () => {
  const products = use(productsPromise);

  return (
    <>
      <FlatList
        data={products?.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No products available.</Text>
          </View>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  emptyText: {
    fontSize: 16,
    color: "#666666",
  },
});

export default ProductList;
