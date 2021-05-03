import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CartItem from "../shop/CartItem";
import Colors from "../../themes/colors";

const OrderItem = (props) => {
  const { date, amount } = props;
  const [showDetails, setshowDetails] = React.useState(false);

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.total}> $ {amount.toFixed(2)} </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Button
        color={Colors.primaryColor}
        title="show details"
        onPress={() => {
          setshowDetails((prevState) => !prevState);
        }}
      />
      {showDetails && (
        <View>
          {props.items.map((cartItem) => {
            return (
              <CartItem
                quantity={cartItem.quantity}
                amount={cartItem.totalAmount}
                title={cartItem.title}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    elevation: 5,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 20,
    padding: 10,
  },
  total: {
    fontSize: 16,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  date: {
    fontSize: 16,
    fontWeight: "100",
  },
});
export default OrderItem;
