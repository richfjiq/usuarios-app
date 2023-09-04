import { useCallback, useEffect, useState } from 'react';
import { usersApi } from '../api';
import { User, UsersResponse } from '../interfaces';
import { isAxiosError } from 'axios';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = 'https://reqres.in/api';

  const USER_DESCRIPTION =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  const PROFESSION = [
    'Front End Developer',
    'Back End Developer',
    'Full Stack Developer',
    'HR Specialist',
    'iOS Developer',
    'Android Developer',
    'Recruiter',
    'HR Manager',
    'Senior Recruiter',
    'Graphic Designer',
    'HR Specialist',
    'Recruiter',
  ];

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await usersApi.get<UsersResponse>(`${url}/users?page=1`);
      const resp2 = await usersApi.get<UsersResponse>(`${url}/users?page=2`);
      const allUsers = [...resp.data.data, ...resp2.data.data];

      const sortedUsers = allUsers
        .sort((a, b) => (a.first_name > b.first_name ? 1 : -1))
        .map((user, index) => {
          user['description'] = USER_DESCRIPTION;
          user['profession'] = PROFESSION[index];
          return user;
        });
      console.log({ sortedUsers });

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
