import "react-native-gesture-handler";
import * as React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productReducer from "./redux/store/reducers/products";
import cartReducer from "./redux/store/reducers/cart";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import ShopNavigation from "./navigation/routes";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer);

export default function App() {
  const [loaded] = useFonts({
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
}
