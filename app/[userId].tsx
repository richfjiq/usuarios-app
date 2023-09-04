import { FC, useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import { UserDetailsCard } from '../components';
import { Dimensions, StyleSheet, View } from 'react-native';

const User: FC = () => {
  const navigation = useNavigation();
  const { name, userId, profession, description } = useLocalSearchParams();

  useEffect(() => {
    if (name) {
      navigation.setOptions({
        title: name,
      });
    }
  }, []);

  return (
    <View
      style={{ width: Dimensions.get('window').width, ...styles.container }}
    >
      <UserDetailsCard
        userId={userId as string}
        profession={profession as string}
        description={description as string}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default User;
