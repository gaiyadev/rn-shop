import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import Colors from "../../themes/colors";

const ProductItem = (props) => {
  const { imageUrl, onViewDetails, onAddToCart, title, price } = props;
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <TouchableComp onPress={onViewDetails} useForeground>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          <Button
            color={Colors.primaryColor}
            title="View Details"
            onPress={onViewDetails}
          />
          <Button
            color={Colors.primaryColor}
            title="Add to Cart"
            onPress={onAddToCart}
          />
        </View>
      </View>
    </TouchableComp>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopRightRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  details: {
    height: "15%",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: "OpenSansBold",
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily: "OpenSansRegular",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
  product: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    elevation: 5,
    shadowRadius: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 300,
    margin: 20,
  },
});

export default ProductItem;
