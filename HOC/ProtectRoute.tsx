import { AuthenContext } from 'context/AuthenContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';

export const ProtectRoute = ({ children }) => {
  const { loading, isAuthenticated } = useContext(AuthenContext);
  const router = useRouter();

  if (
    loading ||
    (!isAuthenticated &&
      router.pathname !== '/login' &&
      router.pathname !== '/' &&
      !router.pathname.includes('/learning-paths') &&
      router.pathname !== '/course' &&
      !router.pathname.includes('/course/') &&
      !router.pathname.includes('/teacher/') &&
      router.pathname !== '/teacher' &&
      router.pathname !== '/blog')
  ) {
    return <Loading />;
  }
  return children;
};
