import ProtectedRoute from '../../components/ProtectedRoute';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Header from '../../components/Navbar';
import {
  CreateApplicationContainer,
  CustomHeading,
  Form,
  SubmittedForm,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function CreateOpening() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    additionalInfo: '',
    compensation: '',
    jobDescription: '',
    companyName: '',
  });
  const [applicationId, setApplicationId] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/application/create', formData)
      .then((res) => {
        setApplicationId(res?.data?.application?._id);
        console.log(res);
        setFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const {
    title,
    location,
    additionalInfo,
    compensation,
    jobDescription,
    companyName,
  } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderCreateApplication = () => {
    if (formSubmitted) {
      return (
        <SubmittedForm>
          <h2>Job opening successfull created.</h2>
          <p>
            Share this{' '}
            <a href={`${window.location.origin}/apply/${applicationId}`}>
              link
            </a>{' '}
            with people so that they can apply.
          </p>
        </SubmittedForm>
      );
    } else {
      return (
        <>
          <CustomHeading>
            Please fill in the necessary details to create a job opening:
          </CustomHeading>
          <Form onSubmit={onSubmit}>
            <Input
              placeholder="Title of the Job"
              value={title}
              onChange={onChange}
              name="title"
              required={true}
            />
            <Input
              placeholder="Company Name"
              value={companyName}
              onChange={onChange}
              name="companyName"
              required={true}
            />
            <Input
              placeholder="Location (Remote or any other location)"
              value={location}
              onChange={onChange}
              name="location"
              required={true}
            />
            <Input
              placeholder="Compensation"
              value={compensation}
              onChange={onChange}
              name="compensation"
            />
            <Input
              placeholder="Job Description (Link or Information)"
              value={jobDescription}
              onChange={onChange}
              name="jobDescription"
              required={true}
            />
            <Input
              placeholder="Additional Information"
              value={additionalInfo}
              onChange={onChange}
              name="additionalInfo"
            />
            <Button
              type="secondry"
              afterIcon="arrowLeft"
              altIconText="An arrow pointing towards left"
            >
              Create a Job Opening
            </Button>
          </Form>
        </>
      );
    }
  };

  return (
    <ProtectedRoute>
      <Header isAuth={true} />
      <CreateApplicationContainer>
        {renderCreateApplication()}
      </CreateApplicationContainer>
    </ProtectedRoute>
  );
}
