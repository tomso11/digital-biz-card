import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const SocialMediaButtonLinkedin = () => {
  return (
    <MDBBtn className='social-media-btn' style={{ backgroundColor: '#0082ca' }} href='#'>
            <MDBIcon className='me-2' fab icon='linkedin' /> LinkedIn
    </MDBBtn>
  );
}

export default SocialMediaButtonLinkedin;