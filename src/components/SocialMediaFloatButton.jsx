import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const SocialMediaFloatButton = () => {
  return (
    <MDBBtn className='social-float-btn' size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='#'>
      <MDBIcon fab icon='instagram' />
    </MDBBtn>
  );
}

export default SocialMediaFloatButton;