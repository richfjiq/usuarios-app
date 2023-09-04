import { useCallback, useEffect, useState } from 'react';
import { usersApi } from '../api';
import { User, UserResponse, UsersResponse } from '../interfaces';
import { isAxiosError } from 'axios';

export const useUsers = ({ id }: { id: string }) => {
  const [user, setUser] = useState<User>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = 'https://reqres.in/api';

  const getUser = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await usersApi.get<UserResponse>(`${url}/users/${id}`);
      setUser(resp.data.data);
      setLoading(false);
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response.data);
        setError(true);
        setLoading(false);
      }
    }
  }, [id]);

  useEffect(() => {
    getUser();
  }, []);

  return {
    loading,
    user,
    getUser,
    error,
  };
};
