import axiosInstance from '@/services/axios.service';

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export const fetchUsers = async (): Promise<User[]> => {
  const { data }: { data: User[] } = await axiosInstance.get('/users');
  return data;
};

export const fetchUser = async (id: number): Promise<User> => {
  const { data }: { data: User } = await axiosInstance.get(`/users/${id}`);
  return data;
};
