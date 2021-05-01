import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../themes/colors";
const CartScreen = (props) => {
  const {} = props;
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${cartTotalAmount}</Text>
        </Text>
        <Button title="Order Now" />
      </View>
      {/* <FlatList /> */}
      <View>
        <Text>ocvet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    elevation: 5,
    shadowRadius: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  summaryText: {
    fontFamily: "OpenSansBold",
    fontSize: 18,
  },
  amount: {
    color: Colors.accentColor,
  },
});
export default CartScreen;
