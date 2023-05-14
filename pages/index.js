import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/tasks');
  }, [router]);

  return null; // You can return any initial loading state or component here if needed
}