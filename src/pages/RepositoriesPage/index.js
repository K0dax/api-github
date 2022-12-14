import React from 'react';

import Profile from './Profile';

import Filter from './Filter';

import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

const RepositoriesPage = () => {
  const user = {
    login: 'K0dax',
    name: 'Yan Carlos',
    avatar_url: 'https://avatars.githubusercontent.com/u/78356819?v=4',
    followers: 0,
    following: 0,
    company: null,
    blog: 'https://K0dax.com',
    location: 'RJ',
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
