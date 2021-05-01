import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import Colors from "../../themes/colors";
import { useSelector } from "react-redux";

const ProductDetailsScreen = (props) => {
  const { productId } = props.route.params;

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.btn}>
        <Button
          color={Colors.primaryColor}
          title="Add to Cart"
          onPress={() => {}}
        />
      </View>
      <Text style={styles.price}> ${selectedProduct.price.toFixed(2)} </Text>
      <Text style={styles.description}> {selectedProduct.description} </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "OpenSansBold",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "OpenSansRegular",

    marginHorizontal: 20,
  },
  btn: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default ProductDetailsScreen;
