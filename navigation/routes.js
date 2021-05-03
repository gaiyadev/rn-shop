import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import UserProductScreen from "../screens/user/UserProductScreen";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
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
              Platform.OS === "android" ? "OpenSansRegular" : "OpenSansRegular",
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
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName="md-menu"
                onPress={() => {
                  navigation.toggleDrawer();
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
          title: "Carts Items",
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
          headerTitleStyle: {
            fontFamily:
              Platform.OS === "android" ? "OpenSansRegular" : "OpenSansRegular",
          },
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const orderNavigator = createStackNavigator();

const ordersStack = () => {
  return (
    <orderNavigator.Navigator>
      <orderNavigator.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={({ route, navigation }) => ({
          title: "All Orders",
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
          headerTitleStyle: {
            fontFamily:
              Platform.OS === "android" ? "OpenSansRegular" : "OpenSansRegular",
          },
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName="md-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              ></Item>
            </HeaderButtons>
          ),
        })}
      />
    </orderNavigator.Navigator>
  );
};

const adminNavigator = createStackNavigator();

const adminsStack = () => {
  return (
    <adminNavigator.Navigator>
      <adminNavigator.Screen
        name="OrdersScreen"
        component={UserProductScreen}
        options={({ route, navigation }) => ({
          title: "Your Products",
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.SecondaryColor,
          headerTitleStyle: {
            fontFamily:
              Platform.OS === "android" ? "OpenSansRegular" : "OpenSansRegular",
          },
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName="md-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              ></Item>
            </HeaderButtons>
          ),
        })}
      />
    </adminNavigator.Navigator>
  );
};

const ShopNavigator = createDrawerNavigator();

function AppD() {
  return (
    <NavigationContainer>
      <ShopNavigator.Navigator initialRouteName="Products">
        <ShopNavigator.Screen
          name="Products"
          component={ShopNavigation}
          options={{
            title: "Products",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-list"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
        <ShopNavigator.Screen
          name="Orders"
          component={ordersStack}
          options={{
            title: "Orders",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-cart"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
        <ShopNavigator.Screen
          name="admin"
          component={adminsStack}
          options={{
            title: "admin",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-create"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
      </ShopNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppD;
