import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Show an alert
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Perform logout logic
            // For now, let's assume logout is successful and navigate to the Login screen
            navigation.navigate('LogIn');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}
