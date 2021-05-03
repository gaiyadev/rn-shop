import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import OrderItems from "../../components/shop/OrderItems";

const OrdersScreen = (props) => {
  const {} = props;
  const orders = useSelector((state) => state.orders.orders);
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={orders}
      renderItem={(itemData) => (
        <OrderItems
          items={itemData.item.items}
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default OrdersScreen;
