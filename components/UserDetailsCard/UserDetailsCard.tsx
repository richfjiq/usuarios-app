import { FC, useEffect } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { useUserById } from '../../hooks';
import { Loading } from '../Loading';
import { UserData } from '../../interfaces';
import { styles } from './styles';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  userId: string;
  profession: string;
  description: string;
}

const UserDetailsCard: FC<Props> = ({ userId, profession, description }) => {
  const { getUser, user, loading } = useUserById();

  useEffect(() => {
    getUser(userId as string);
  }, [userId]);

  if (loading || !user) return <Loading />;

  const { first_name, last_name, email, avatar } = user as UserData;

  return (
    <View
      style={{
        width: Dimensions.get('window').width - 40,
        ...styles.container,
      }}
    >
      <Image
        source={{ uri: avatar }}
        style={{
          width: (Dimensions.get('window').width - 40) * 0.75,
          height: (Dimensions.get('window').width - 40) * 0.75,
          ...styles.image,
        }}
      />
      <View style={styles.row}>
        <AntDesign name="idcard" size={35} color="black" style={styles.icon} />
        <Text style={styles.name}>{`${first_name} ${last_name}`}</Text>
      </View>

      <View style={styles.row}>
        <MaterialCommunityIcons
          name="email-outline"
          size={35}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.email}>{email}</Text>
      </View>

      <View style={styles.rowDescription}>
        <Feather name="info" size={35} color="black" style={styles.icon} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default UserDetailsCard;
