import React from 'react';

import { Container, Header, Avatar, Login, Name } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/78356819?v=4" />
      <Login>K0dax</Login>
      <Name>Yan Carlos</Name>
    </Header>
  </Container>
);

export default Profile;
