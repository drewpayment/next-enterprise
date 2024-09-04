import { useEffect, useState } from 'react';
import { User } from 'types/user';
import { fetchUser } from '../lib/api.example';

export function useUser(userId: string) {
  const [user, setUser] = useState<User>(null as unknown as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId).then(userData => {
      setUser(userData);
      setLoading(false);
    });
  }, [userId]);

  return { user, loading };
}