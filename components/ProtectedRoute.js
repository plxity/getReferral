import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Loader from '../components/Loader';
const ProtectedRoute = (props) => {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/');
    },
  });
  // loading state
  if (status === 'loading') {
    return <div />;
  }

  return props.children;
};

export default ProtectedRoute;
