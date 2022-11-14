import React from 'react';

const Header = () => {
  return (
    <WrapperHeader>
      <Container>
        <div className='header-logo'>
          <img src="" alt="logo"/>
          <hi>Space Traverlers&apos; Hub</hi>
        </div>
        <nav>
          <ul>
            <li>Rockets</li>
            <li>Mission</li>
            <li>My Profile</li>
          </ul>
        </nav>

      </Container>
    </WrapperHeader>
  );
}
export default Header;
