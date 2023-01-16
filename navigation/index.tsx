/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

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
    GetLocationScreen,
    CreatePassword,
    AddBirthDateScreen,
    NicknameScreen,
    LoginViaEmail,
    EmailVerification,
} from '../screens';
import { RegisterScreen } from '../screens/RegisterScreen';

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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const globalScreenOptions = {
        headerStyle: { backgroundColor: 'white', borderBottom: '2px solid' },
        headerTitleStyle: { color: 'black' },
        headerTintColor: 'white',
    };
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
            <Stack.Screen name="GetLocation" component={GetLocationScreen} />
            <Stack.Screen name="LoginViaEmail" component={LoginViaEmail} />
            <Stack.Screen name="CreatePassword" component={CreatePassword} />
            <Stack.Screen name="AddBirthDateScreen" component={AddBirthDateScreen} />
            <Stack.Screen name="EmailVerification" component={EmailVerification} />
            <Stack.Screen name="NicknameScreen" component={NicknameScreen} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
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
