import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import News from "../screens/News";

const navigator = createStackNavigator(
  {
    SignUp: SignUp,
    Login: Login,
    News: News,
  },
  {
    initialRouteName: "SignUp",
    defaultNavigationOptions: {
      title: "InBrief",
    },
  }
);

export default createAppContainer(navigator);
