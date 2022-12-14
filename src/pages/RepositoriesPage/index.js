import React from 'react';

import Profile from './Profile';

import Filter from './Filter';

import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';
import { getLangsFrom } from '../../services/getlangs';

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

  const repositories = [
    {
      name: 'Repo 1',
      desc: 'desc 1',
      html_url: 'https://koda.com',
      language: 'JavaScript',
    },
    {
      name: 'Repo 2',
      desc: 'desc 2',
      html_url: 'https://koda.com',
      language: 'PHP',
    },
    {
      name: 'Repo 3',
      desc: 'desc 3',
      html_url: 'https://koda.com',
      language: 'Ruby',
    },
    {
      name: 'Repo 4',
      desc: 'desc 4',
      html_url: 'https://koda.com',
      language: 'Python',
    },
    {
      name: 'Repo 5',
      desc: 'desc 5',
      html_url: 'https://koda.com',
      language: 'JavaScript',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
