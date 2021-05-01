import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import { addToCart } from "../../redux/store/actions/cart";

const ProductOverviewScreen = (props) => {
  const { navigation } = props;
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

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
          dispatch(addToCart(itemData.item));
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
