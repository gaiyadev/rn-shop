import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from "../themes/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
/**======================================================================
 *                              SHOP NAVIGATION SECTION
 * ======================================================================
 */
const Stack = createStackNavigator();

const ShopNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ProductOverviewScreen}
          options={({ route, navigation }) => ({
            title: "Product Overview",
            headerTintColor:
              Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
            headerTitleStyle: {
              fontFamily:
                Platform.OS === "android"
                  ? "OpenSansRegular"
                  : "OpenSansRegular",
            },
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? Colors.primaryColor : "",
            },
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Cart"
                  iconName="cart"
                  onPress={() => {
                    navigation.navigate("CartScreen");
                  }}
                ></Item>
              </HeaderButtons>
            ),
          })}
        />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={({ route, navigation }) => ({
            title: route.params.title,
            headerTintColor:
              Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
            headerTitleStyle: {
              fontFamily:
                Platform.OS === "android" ? "OpenSansBold" : "OpenSansRegular",
            },
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? Colors.primaryColor : "",
            },
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Cart"
                  iconName="cart"
                  onPress={() => {
                    navigation.navigate("CartScreen");
                  }}
                ></Item>
              </HeaderButtons>
            ),
          })}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            title: "Product Overview",
            headerTintColor:
              Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
            headerTitleStyle: {
              fontFamily:
                Platform.OS === "android"
                  ? "OpenSansRegular"
                  : "OpenSansRegular",
            },
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? Colors.primaryColor : "",
            },
            // headerRight: () => (
            //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
            //     <Item
            //       title="Cart"
            //       iconName="cart"
            //       onPress={() => {
            //       }}
            //     ></Item>
            //   </HeaderButtons>
            // ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigation;
