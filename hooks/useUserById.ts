import { useCallback, useState } from 'react';
import { usersApi } from '../api';
import { UserData, UserResponse } from '../interfaces';
import { isAxiosError } from 'axios';

export const useUserById = () => {
  const [user, setUser] = useState<UserData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = 'https://reqres.in/api';

  const getUser = useCallback(async (userId: string) => {
    try {
      setLoading(true);
      const resp = await usersApi.get<UserResponse>(`${url}/users/${userId}`);
      setUser(resp.data.data);
      setLoading(false);
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error?.response?.data);
        setError(true);
        setLoading(false);
      }
    }
  }, []);

  return {
    loading,
    user,
    getUser,
    error,
  };
};
