import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F86F03',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: 'Users' }} />
      <Stack.Screen name="[userId]" options={{ headerTitle: 'User' }} />
    </Stack>
  );
};

export default StackLayout;
