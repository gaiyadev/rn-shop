import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  const { onRemove, quantity, title, amount } = props;
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>
        <Text style={styles.qty}> {quantity}</Text>
        <Text style={styles.mainText}>{title}</Text>
        <View style={styles.itemData}>
          <Text style={styles.mainText}>{amount.toFixed(2)}</Text>
          <TouchableOpacity onPress={onRemove} styles={styles.deleteBtn}>
            <Ionicons
              name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
              size={23}
              color="red"
            />
          </TouchableOpacity>
        </View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainText: {
    fontFamily: "OpenSansBold",
    fontSize: 16,
  },
  qty: {
    fontFamily: "OpenSansRegular",
    color: "#888",
    fontSize: 16,
  },
  deleteBtn: {
    marginLeft: 20,
  },
});

export default CartItem;
