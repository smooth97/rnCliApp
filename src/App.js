import React, {useEffect} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Home from './screens/Home';
// import Login from './screens/Login';
// import {Provider} from 'react-redux';
// import {Store} from './redux/store';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {TouchableOpacity, Text} from 'react-native';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <Provider store={Store}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="Login"
//           screenOptions={{
//             headerTitleAlign: 'center',
//             headerStyle: {
//               backgroundColor: '#0080ff',
//             },
//             headerTintColor: '#ffffff',
//             headerTitleStyle: {
//               fontSize: 25,
//               fontWeight: 'bold',
//             },
//           }}>
//           <Stack.Screen
//             name="Login"
//             component={Login}
//             options={{
//               headerShown: false,
//             }}
//           />
//           <Stack.Screen name="Home" component={Home} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;

export const App = () => {
  // const [permissions, setPermissions] = useState({});

  /**
   * By calling this function, notification with category `userAction` will have action buttons
   */
  const setNotificationCategories = () => {
    PushNotificationIOS.setNotificationCategories([
      {
        id: 'userAction',
        actions: [
          {id: 'open', title: 'Open', options: {foreground: true}},
          {
            id: 'ignore',
            title: 'Desruptive',
            options: {foreground: true, destructive: true},
          },
          {
            id: 'text',
            title: 'Text Input',
            options: {foreground: true},
            textInput: {buttonTitle: 'Send'},
          },
        ],
      },
    ]);
  };

  useEffect(() => {
    PushNotificationIOS.addEventListener('notification', onRemoteNotification);
  });

  const onRemoteNotification = notification => {
    const actionIdentifier = notification.getActionIdentifier();

    if (actionIdentifier === 'open') {
      // Perform action based on open action
    }

    if (actionIdentifier === 'text') {
      // Text that of user input.
      const userText = notification.getUserText();
      // Perform action based on textinput action
    }
  };

  return (
    <TouchableOpacity onPress={setNotificationCategories}>
      <Text>hihi</Text>
    </TouchableOpacity>
  );
};
