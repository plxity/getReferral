import {
  CardContainer,
  Title,
  Location,
  Company,
  CreatedAt,
  CopyLinkContainer,
} from './styles';
import { useState } from 'react';
import { getModifiedDate, copyText } from '../../utils';

function Card({
  title = '',
  location = '',
  companyName = false,
  date = false,
  _id,
}) {
  const applyLink = `${window.location.origin}/apply/${_id}`;
  const [copied, setCopied] = useState(false);
  return (
    <CardContainer>
      <Title>{title}</Title>
      <div className="mt-12">
        <Company>{companyName}</Company>,<Location> {location}</Location>
      </div>
      <CreatedAt className="mt-12">
        Created at : {getModifiedDate(date)}
      </CreatedAt>
      <CopyLinkContainer
        className="mt-12"
        onClick={(e) => copyText(e, setCopied)}
        data-link={applyLink}
      >
        {copied ? 'Copied' : 'Copy Apply Link'}
      </CopyLinkContainer>
    </CardContainer>
  );
}

export default Card;
