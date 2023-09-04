import { useCallback, useEffect, useState } from 'react';
import { usersApi } from '../api';
import { UsersResponse } from '../interfaces';
import { isAxiosError } from 'axios';

export const useUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = 'https://reqres.in/api';

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await usersApi.get<UsersResponse>(`${url}/users?page=1`);
      const resp2 = await usersApi.get<UsersResponse>(`${url}/users?page=2`);
      const allUsers = [...resp.data.data, ...resp2.data.data];

      const sortedUsers = allUsers.sort((a, b) =>
        a.first_name > b.first_name ? 1 : -1
      );

      setUsers(sortedUsers);
      setLoading(false);
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error?.response?.data);
        setError(true);
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {}, []);

  return {
    loading,
    users,
    error,
  };
};
