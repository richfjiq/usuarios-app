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
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Empleados',
          headerTitleStyle: { fontSize: 24 },
          contentStyle: { backgroundColor: '#FFF6F4' },
        }}
      />
      <Stack.Screen
        name="[userId]"
        options={{
          headerTitleStyle: { fontSize: 24 },
        }}
      />
    </Stack>
  );
};

export default StackLayout;
