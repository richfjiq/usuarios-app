import { FC } from 'react';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
} from 'react-native';
import { useUsers } from '../hooks';
import { HeaderList, Loading, UserCard } from '../components';

const ItemSeparator = () => {
  return <View style={styles.separator} />;
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
