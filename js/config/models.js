import Realm from 'realm';

const userSchema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: 'string',
    token: 'string',
  },
};

const realm = new Realm({ schema: [userSchema] });

export const addUser = (id, token) => {
  realm.write(() => {
    realm.create('User', {
      id,
      token,
    });
  });
};

export const removeUser = () => {
  return realm.write(() => {
    const allUsers = realm.objects('User');
    realm.delete(allUsers);
  });
};

export const getUser = () => {
  return realm.objects('User');
};

export default realm;
