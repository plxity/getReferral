import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Meta from '../pages/meta';
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

  return (
    <>
      <Meta />
      {props.children}
    </>
  );
};

export default ProtectedRoute;
