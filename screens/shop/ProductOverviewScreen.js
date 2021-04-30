import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

const ProductOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);
  // const renderItem = (itemData) => {
  //   <Text> {itemData.item.title} </Text>;
  // };

  <FlatList
    data={products}
    keyExtractor={(item) => item.id}
    renderItem={(itemData) => {
      <Text> {itemData.item.title} </Text>;
    }}
  />;
};

const styles = StyleSheet.create({});

export default ProductOverviewScreen;
