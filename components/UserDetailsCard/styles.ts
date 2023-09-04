import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    paddingTop: 0,
    borderRadius: 10,
    backgroundColor: '#EEEDED',
    borderWidth: 0.5,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    borderRadius: 10,
    marginBottom: 40,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  rowDescription: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
  },
  icon: {
    marginRight: 15,
  },
  name: {
    fontWeight: '600',
    fontSize: 30,
  },
  email: {
    fontWeight: '400',
    fontSize: 20,
    flex: 1,
  },
  description: {
    fontWeight: '400',
    fontSize: 20,
    flex: 1,
    textAlign: 'justify',
  },
});
