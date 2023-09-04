import { Text } from 'react-native';
import { styles } from './styles';
import Animated, { FadeInUp } from 'react-native-reanimated';

const HeaderList = () => {
  return (
    <Animated.View style={styles.container} entering={FadeInUp}>
      <Text style={styles.header}>Lista de Empleados</Text>
    </Animated.View>
  );
};

export default HeaderList;
