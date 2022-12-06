import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/78356819?v=4" />
      <Login>K0dax</Login>
      <Name>Yan Carlos</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp; <i>seguindo</i>
      </Data>
      <Data>
        <MdWork size={20} />
        K0dax ltda
      </Data>
      <Data>
        <MdLocationCity size={20} />
        Rio de Janeiro
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="https://www.Koda.com">Koda.com</a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;
