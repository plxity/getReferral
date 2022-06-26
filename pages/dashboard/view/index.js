import ProtectedRoute from '../../../components/ProtectedRoute';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '../../../components/Card';
import Header from '../../../components/Navbar';
import { ViewApplicationContainer, NoApplication } from '../../../styles/viewStyles';

export default function CreateOpening() {
  const [applicationData, setApplicationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/application/view')
      .then((res) => {
        setApplicationData(res?.data?.profile?.applicationsCreated || []);
      })
      .catch((err) => {
        alert('Something went wrong. PLease try again');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderApplications = () => {
    if (applicationData.length === 0 && loading === false) {
      return (
        <NoApplication>
          <h2>No Application created.</h2>
          <p>
            Go to <Link href="/dashboard">Dashboard</Link> to create your first
            job opening.
          </p>
        </NoApplication>
      );
    } else {
      return applicationData.map((application) => {
        const { _id = '' } = application;
        return (
          <Link href={`/dashboard/view/${_id}`} key={_id}>
            <a className='no-highlight'>
              <Card {...application} />
            </a>
          </Link>
        );
      });
    }
  };

  if (loading) {
    return '';
  }

  return (
    <ProtectedRoute>
      <Header isAuth={true} />
      <ViewApplicationContainer>
        {renderApplications()}
      </ViewApplicationContainer>
    </ProtectedRoute>
  );
}
