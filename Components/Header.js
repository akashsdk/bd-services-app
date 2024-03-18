import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  const navigation = useNavigation();

  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  const handleNotification = () => {
    navigation.navigate("Notification");
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.profileButton} onPress={handleProfile}>
        <FontAwesome name="user-circle" size={40} color="#555" />
      </TouchableOpacity>

      <View style={styles.searchBar}>
        <FontAwesome
          name="search"
          size={25}
          color="#555"
          style={styles.searchIcon}
        />
        <Text style={styles.searchText}>Search...</Text>
      </View>

      <TouchableOpacity
        style={styles.notificationButton}
        onPress={handleNotification}
      >
        <FontAwesome name="bell" size={34} color="#fb5b5a" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 40,
  },
  profileButton: {
    padding: 5,
  },
  searchBar: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchText: {
    color: "#555",
    fontSize: 16,
    flex: 1,
  },
  notificationButton: {
    padding: 5,
  },
});

export default Header;
