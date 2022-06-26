import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ApplyContainer, Heading, SubHeading } from './styles';
import Header from '../../components/Navbar';
import ApplyModal from '../../components/ApplyModal';
function ApplyForApplication() {
  const [loading, setLoading] = useState(true);
  const [application, setApplication] = useState(false);
  const [applicationId, setApplicationId] = useState(false);
  const [userId, setUserId] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const { id } = router.query;
      axios
        .get(`/api/application/view/${id}`)
        .then((res) => {
          const { userId, application } = res?.data;
          setApplication(application);
          setApplicationId(application[0]._id);
          setUserId(userId);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [router.query]);

  // loading state
  if (loading) {
    return <div />;
  }

  const {
    date,
    jobDescription,
    location,
    title,
    compensation,
    additionalInfo,
    companyName,
  } = application[0];

  return (
    <>
      {/* Header component */}
      <Header />
      <ApplyContainer>
        <Heading>{title}</Heading>

        <SubHeading>
          <b>Company:</b> {companyName}
        </SubHeading>
        <SubHeading>
          <b>Location:</b> {location}
        </SubHeading>

        <SubHeading>
          <b>Posted at:</b> {date}
        </SubHeading>
        <SubHeading>
          <b>Job Description:</b> <a href={jobDescription}>Link</a>
        </SubHeading>
        <SubHeading>
          <b>Compensation:</b> {compensation}
        </SubHeading>
        <SubHeading>
          <b>Additional Information: </b>
          {additionalInfo}
        </SubHeading>
        <ApplyModal applicationId={applicationId} userId={userId} />
      </ApplyContainer>
    </>
  );
}

export default ApplyForApplication;
