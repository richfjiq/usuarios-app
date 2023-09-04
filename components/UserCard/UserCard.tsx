import { Link } from 'expo-router';
import { FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './UserCard.style';
import { AntDesign } from '@expo/vector-icons';

interface Props {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  index: number;
}

const UserCard: FC<Props> = ({ id, firstName, lastName, image, index }) => {
  return (
    <Link href={`/${id}`} asChild>
      <TouchableOpacity style={styles.container}>
        <View style={styles.user}>
          {/* <View style={styles.numberContainer}>
            <Text style={styles.number}>{index + 1}</Text>
          </View> */}
          <View>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
        </View>
        <View style={styles.icon}>
          <AntDesign name="caretright" size={20} color="black" />
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default UserCard;
