import React from "react";
import {
  ImageBackground,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Colors from "../../themes/colors";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/store/actions/cart";
import Carousel from "react-native-snap-carousel";

const ProductDetailsScreen = (props) => {
  const { navigation } = props;
  const { productId } = props.route.params;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.availableProducts);

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          navigation.navigate("ProductDetailsScreen", {
            productId: item.id,
            title: item.title,
          });
        }}
      >
        <View>
          <ImageBackground style={styles.image} source={{ uri: item.imageUrl }}>
            <Text style={styles.title}>{item.title}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.btn}>
        <Button
          color={Colors.primaryColor}
          title="Add to Cart"
          onPress={() => {
            dispatch(addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}> ${selectedProduct.price.toFixed(2)} </Text>
      <Text style={styles.description}> {selectedProduct.description} </Text>
      <View style={styles.carousel}>
        <Carousel
          layout={"stack"}
          ayoutCardOffset={`18`}
          data={products}
          renderItem={_renderItem}
          sliderWidth={300}
          itemWidth={300}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    alignItems: "center",
    width: "100%",
    marginVertical: 15,
  },
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
  title: {
    color: Colors.accentColor,
    paddingHorizontal: 12,
    fontSize: 22,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    marginVertical: 30,
    marginTop: 260,
  },
});

export default ProductDetailsScreen;
