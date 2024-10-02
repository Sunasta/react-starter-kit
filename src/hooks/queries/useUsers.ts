import { User, fetchUsers } from '@/api/user';
import { useQuery } from '@tanstack/react-query';

export const useUsers = () => {
  return useQuery<User[], Error>({ queryKey: ['users'], queryFn: fetchUsers });
};
