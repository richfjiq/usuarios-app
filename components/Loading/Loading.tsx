import { View, Text, Dimensions, ActivityIndicator } from 'react-native';
import { styles } from './styles';

const Loading = () => {
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 120,
        ...styles.container,
      }}
    >
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default Loading;
