import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");
const cardWidth = (width - 40 - 10) / 2;

const ProductCard = ({ item }: any) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        {item.brand ? (
          <Text style={styles.brand} numberOfLines={1}>
            {item.brand}
          </Text>
        ) : null}

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.footerRow}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>★ {item.rating}</Text>
          </View>
        </View>

        <Text
          style={[
            styles.stockStatus,
            item.availabilityStatus === "In Stock"
              ? styles.inStock
              : styles.lowStock,
          ]}
        >
          {item.availabilityStatus}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#8d8d8dff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  thumbnail: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  brand: {
    fontSize: 11,
    color: "#666666",
    marginTop: 2,
    textTransform: "uppercase",
  },
  description: {
    fontSize: 12,
    color: "#888888",
    marginTop: 4,
    marginBottom: 8,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  ratingBadge: {
    backgroundColor: "#FFF8E1",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  ratingText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#F57F17",
  },
  stockStatus: {
    fontSize: 11,
    fontWeight: "500",
    marginTop: 6,
  },
  inStock: {
    color: "#2E7D32",
  },
  lowStock: {
    color: "#D32F2F",
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

export default ProductCard;
