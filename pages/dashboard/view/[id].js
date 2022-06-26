import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { ResponseContainer } from '../../../styles/viewStyles';
import Header from '../../../components/Navbar';
import Table from '../../../components/Table';
import ProtectedRoute from '../../../components/ProtectedRoute';

function ViewResponse() {
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState(false);

  // fetching information for a particular Job ID.
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const { id } = router.query;
      axios
        .get(`/api/application/response/${id}`)
        .then((res) => {
          setResponses(res.data);
        })
        .catch((err) => {})
        .finally(() => {
          setLoading(false);
        });
    }
  }, [router.query]);

  // loading state
  if (loading) {
    return <div />;
  }
  const renderResponses = () => {
    if (loading) {
      return <div />;
    } else {
      if (responses) {
        return <Table responses={responses} />;
      } else {
        return <div>dasdas</div>;
      }
    }
  };
  return (
    <ProtectedRoute>
      <Header isAuth={true} />
      <ResponseContainer>
        {error ? <div>Error</div> : renderResponses()}
      </ResponseContainer>
    </ProtectedRoute>
  );
}

export default ViewResponse;
