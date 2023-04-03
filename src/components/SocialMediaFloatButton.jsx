import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const SocialMediaFloatButton = ({social}) => {

  const backgroundColor = social === 'facebook' ? '#3b5998' : social === 'twitter' ? '#55acee' : social === 'github' ? '#333333' : '#ac2bac';
  return (
    <MDBBtn className= "social-float-btn" size='lg' floating style={{ backgroundColor }} href='#'>
      <MDBIcon fab icon={social} />
    </MDBBtn>
  );
}

export default SocialMediaFloatButton;