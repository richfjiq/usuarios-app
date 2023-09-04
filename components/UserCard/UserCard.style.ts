import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberContainer: {
    width: 50,
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
  },
  number: {
    fontSize: 30,
    fontWeight: '500',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 70,
    marginRight: 20,
  },
  icon: {
    // alignSelf: 'flex-end',
  },
  name: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 5,
  },
  profession: {
    fontWeight: '400',
    fontSize: 18,
  },
});
