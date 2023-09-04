import { AntDesign } from '@expo/vector-icons';
import Animated, { BounceInLeft, BounceInRight } from 'react-native-reanimated';
import { FC } from 'react';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './UserCard.style';

interface Props {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  index: number;
  profession: string;
}

const UserCard: FC<Props> = ({
  id,
  firstName,
  lastName,
  image,
  index,
  profession,
}) => {
  let animation = BounceInLeft.duration(1000);
  if ((index + 1) % 2 !== 0) {
    animation = BounceInRight.duration(1000);
  }

  return (
    <Animated.View entering={animation}>
      <Link href={`/${id}`} asChild>
        <TouchableOpacity style={styles.container}>
          <View style={styles.user}>
            <View>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View>
              <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
              <Text style={styles.profession}>{`${profession}`}</Text>
            </View>
          </View>
          <View style={styles.icon}>
            <AntDesign name="caretright" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </Link>
    </Animated.View>
  );
};

export default UserCard;
