import { FC, useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import { UserDetailsCard } from '../components';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

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
    <ScrollView
      style={{ width: Dimensions.get('window').width, ...styles.container }}
    >
      <UserDetailsCard
        userId={userId as string}
        profession={profession as string}
        description={description as string}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
  },
});

export default User;
