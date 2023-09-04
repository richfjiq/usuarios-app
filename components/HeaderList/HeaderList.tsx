import { Text, View } from 'react-native';
import { styles } from './styles';

const HeaderList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Listado de Usuarios</Text>
    </View>
  );
};

export default HeaderList;
