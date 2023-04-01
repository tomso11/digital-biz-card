import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function SocialMediaButton() {
  return (
    <MDBBtn style={{ backgroundColor: '##0082ca' }} href='#'>
      <MDBIcon className='me-2' fab icon='linkedin-in' /> LinkedIn
    </MDBBtn>
  );
}