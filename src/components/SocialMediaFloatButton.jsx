import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function SocialMediaFloatButton() {
  return (
    <MDBBtn size='lg' floating style={{ backgroundColor: '#55acee' }} href='#'>
      <MDBIcon fab icon='twitter' />
    </MDBBtn>
  );
}