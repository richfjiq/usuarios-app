import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    paddingTop: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(247, 109, 2, 0.11)',
    borderWidth: 0.5,
    borderColor: 'rgba(247, 109, 2, 0.9)',
    marginBottom: 50,
  },
  image: {
    borderRadius: 10,
    marginBottom: 40,
    marginTop: 40,
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
    fontSize: 28,
  },
  email: {
    fontWeight: '400',
    fontSize: 18,
    flex: 1,
  },
  description: {
    fontWeight: '400',
    fontSize: 18,
    flex: 1,
    textAlign: 'justify',
    paddingRight: 5,
  },
});
