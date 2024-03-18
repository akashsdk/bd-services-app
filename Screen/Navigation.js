import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import ServiceScreen from './Services';
import MenuScreen from './Menu';
import ProfileScreen from './Profile';
import LoginScreen from './LogIn';
import SignUpScreen from './SingIn';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Notification from '../Components/Notification';

const Stack = createStackNavigator();

const Navigation = ({ routeName }) => {
  return (
    <NavigationContainer>
    {(routeName !== 'Login' && routeName !== 'SignUp') && <Header />}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Service" component={ServiceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      </Stack.Navigator>
    {(routeName !== 'Login' && routeName !== 'SignUp') && <Footer />}
    </NavigationContainer>
  );
}

export default Navigation;
