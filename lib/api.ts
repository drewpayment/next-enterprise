import { User } from 'types/user';


// Mock data for users
// Represents a client side API call
export const fetchUser = (userId: string): Promise<User> => {
  return Promise.resolve({
    id: userId,
    name: 'John Doe',
    email: 'john.doe@example.com',
  } as User);
}