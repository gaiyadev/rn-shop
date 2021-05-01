import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductOverviewScreen = (props) => {
  const { navigation } = props;
  const products = useSelector((state) => state.products.availableProducts);

  const renderItemHandler = (itemData) => {
    return (
      <ProductItem
        title={itemData.item.title}
        price={itemData.item.price}
        imageUrl={itemData.item.imageUrl}
        onViewDetails={() => {
          navigation.navigate("ProductDetailsScreen", {
            productId: itemData.item.id,
            title: itemData.item.title,
          });
        }}
        onAddToCart={() => {
          console.log("Added to cart");
        }}
      />
    );
  };
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderItemHandler}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductOverviewScreen;
