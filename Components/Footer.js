import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Footer() {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate("Home");
  };

  const handleServices = () => {
    navigation.navigate("Service");
  };

  const handleMenu = () => {
    navigation.navigate("Menu");
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={handleHome} style={styles.footerItem}>
        <Icon name="home" size={30} color="#000" />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleServices} style={styles.footerItem}>
        <Icon name="cogs" size={30} color="#000" />
        <Text style={styles.footerText}>Services</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleMenu} style={styles.footerItem}>
        <Icon name="bars" size={30} color="#000" />
        <Text style={styles.footerText}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 20,
    color: "#fb5b5a",
  },
});
