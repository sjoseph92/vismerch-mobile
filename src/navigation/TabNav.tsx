import React, {ReactNode} from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {
  BuildingStorefrontIcon,
  UserIcon,
  Squares2X2Icon,
} from 'react-native-heroicons/outline';

import HomeScreen from '../screens/Home';
import JobsScreen from '../screens/Jobs';
import ProfileScreen from '../screens/Profile';
import {colors} from '../consts/colors';

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}
type TabBarIconFunction = (props: TabBarIconProps) => ReactNode;

const homeTabBarIcon: TabBarIconFunction = props => {
  const {color, size} = props;
  return <Squares2X2Icon size={size} color={color} />;
};

const homeOptions = {
  tabBarIcon: homeTabBarIcon,
};

const jobTabBarIcon: TabBarIconFunction = props => {
  const {color, size} = props;
  return <BuildingStorefrontIcon size={size} color={color} />;
};

const jobOptions = {
  tabBarIcon: jobTabBarIcon,
};

const profileTabBarIcon: TabBarIconFunction = props => {
  const {color, size} = props;
  return <UserIcon size={size} color={color} />;
};

const profileOptions = {
  tabBarIcon: profileTabBarIcon,
};

const tabScreenOptions: BottomTabNavigationOptions = {
  headerStyle: {backgroundColor: colors.white},
  headerTitleStyle: {color: colors.black, fontSize: 18},
  tabBarActiveTintColor: colors.green[500],
  tabBarInactiveTintColor: colors.gray[500],
  tabBarStyle: {paddingVertical: 8, backgroundColor: colors.white},
  headerTitleAlign: 'left',
};

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} options={homeOptions} />
      <Tab.Screen name="Jobs" component={JobsScreen} options={jobOptions} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={profileOptions}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
