import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const SocialMediaFloatButton = () => {
  return (
    <MDBBtn style={{ backgroundColor: '#55acee' }} href='#'>
      <MDBIcon className='me-2' fab icon='twitter' /> Twitter
    </MDBBtn>
  );
}

export default SocialMediaFloatButton;