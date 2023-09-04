import { FC } from 'react';
import { FlatList, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { HeaderList, Loading, UserCard } from '../components';
import { useUsers } from '../hooks';

const ItemSeparator = () => {
  return (
    <Animated.View
      style={styles.separator}
      entering={FadeInDown.duration(500)}
    />
  );
};

const App: FC = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <Loading />;

  return (
    <SafeAreaView
      style={{
        width: Dimensions.get('window').width,
      }}
    >
      <FlatList
        ListHeaderComponent={HeaderList}
        data={users}
        renderItem={({ item, index }) => (
          <UserCard
            id={item.id}
            firstName={item.first_name}
            lastName={item.last_name}
            image={item.avatar}
            index={index}
            profession={item.profession}
            description={item.description}
          />
        )}
        keyExtractor={(item) => String(item?.id)}
        contentContainerStyle={styles.flatListContainer}
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  separator: {
    height: 1,
    backgroundColor: 'grey',
    marginVertical: 5,
  },
});

export default App;
