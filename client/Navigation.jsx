import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Sign } from "./pages/Sign";
import { MainPage } from "./pages/MainPage";
import { Signin } from "./pages/Signin";
import { Search } from "./pages/Search";
import { Chat } from "./pages/Chat";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign"
          component={Sign}
          options={{ title: "PFly" }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ title: "PFly" }}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ title: "PFly" }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: "PFly" }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ title: "Pfly" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
