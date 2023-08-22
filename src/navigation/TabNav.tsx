import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BuildingStorefrontIcon,
  HomeIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

import HomeScreen from '../screens/Home';
import JobsScreen from '../screens/Jobs';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}
type TabBarIconFunction = (props: TabBarIconProps) => ReactNode;

const homeTabBarIcon: TabBarIconFunction = props => {
  const {color, size} = props;
  return <HomeIcon size={size} color={color} />;
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

const TabNav = () => {
  return (
    <Tab.Navigator>
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
