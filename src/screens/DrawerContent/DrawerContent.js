import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useAtom } from "jotai";
import { tokenAtom, isLoadingAtom } from "../../store/userStore";

export function DrawerContent(props) {
  const [token, setToken] = useAtom(tokenAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  function SignOut() {
    setToken(null);
    setIsLoading(false);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#f0f9ff" }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ size }) =>
                <Icon name="home-outline" color={"#0891b2"} size={size} />}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ size }) =>
                <Icon name="account-outline" color={"#0891b2"} size={size} />}
              label="Profile"
              onPress={() => {
                {
                  props.navigation.navigate("Profile");
                }
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ size }) =>
                <Icon name="car-outline" color={"#0891b2"} size={size} />}
              label="Vehicles"
              onPress={() => {
                {
                  props.navigation.navigate("Vehicles");
                }
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ size }) =>
                <Icon name="alert-box-outline" color={"#0891b2"} size={size} />}
              label="Alerts"
              onPress={() => {
                {
                  props.navigation.navigate("Alerts");
                }
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ size }) =>
                <Icon name="receipt" color={"#0891b2"} size={size} />}
              label="Records"
              onPress={() => {
                {
                  props.navigation.navigate("Records");
                }
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Recommendations"
              onPress={() => {
                {
                  props.navigation.navigate("Recommendations");
                }
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ size }) =>
              <Icon name="logout" color="#67e8f9" size={size} />}
            label="Sign Out"
            onPress={SignOut}
          />
        </Drawer.Section>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1
  },
  userInfoSection: {
    paddingLeft: 20
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold"
  },
  caption: {
    fontSize: 14,
    lineHeight: 14
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3
  },
  drawerSection: {
    marginTop: 15
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16
  }
});
