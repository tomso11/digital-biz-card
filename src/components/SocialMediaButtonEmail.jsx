import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const SocialMediaButtonEmail = () => {
  return (
    <MDBBtn className='social-media-btn' style={{ backgroundColor: '#dd4b39' }} href='#'>
            <MDBIcon className='me-2' fab icon='google' /> Email
    </MDBBtn>
  );
}

export default SocialMediaButtonEmail;