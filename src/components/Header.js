import React from 'react';
import styled from 'style-componenets';

const WrapperHeader = styled.div`
display: flex;
flex-direction: row;
align-item: center;
justify-content: center;
`;

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-item: center;
width: 90%;
max-width: 60rem;
`;

function Header () {
  return (
    <WrapperHeader>
      <Container>
        <div className="header-logo">
          <img src="" alt="logo"/>
          <h1>Space Traverlers&apos; Hub</h1>
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
};
export default Header;
