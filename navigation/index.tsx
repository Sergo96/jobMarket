import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {
    SearchScreen,
    ProfileScreen,
    ChatScreen,
    LoginScreen,
    RegisterScreen,
    Messages,
} from '../screens';
import { useAccessToken } from '../hooks';
import { accessTokenManager } from '../helpers';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context';
import { elements } from '../styles';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const globalScreenOptions = {
        headerStyle: { backgroundColor: elements.HEADER_BACKGROUND },
        headerTitleStyle: { color: elements.WHITE_PRIMARY },
        headerTintColor: 'white',
    };

    const { userToken } = useContext(AuthContext);

    return (
        <Stack.Navigator initialRouteName={'Login'} screenOptions={globalScreenOptions}>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="Messages" component={Messages} />

            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    const globalScreenOptions = {
        headerStyle: { backgroundColor: elements.HEADER_BACKGROUND },
        headerTitleStyle: { color: elements.WHITE_PRIMARY },
        headerTintColor: 'white',
    };

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                ...globalScreenOptions,
            }}
        >
            <BottomTab.Screen
                name="TabOne"
                component={ProfileScreen}
                options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
                })}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={ChatScreen}
                options={{
                    title: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-chatbubble-ellipses-outline" color={color} size={30} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TabThree"
                component={SearchScreen}
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
