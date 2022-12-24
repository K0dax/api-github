import React, { useState } from 'react';

import Profile from './Profile';

import Filter from './Filter';

import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/getlangs';

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

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
      id: '1',
      name: 'Repo 1',
      desc: 'desc 1',
      html_url: 'https://koda.com',
      language: 'JavaScript',
    },
    {
      id: '2',
      name: 'Repo 2',
      desc: 'desc 2',
      html_url: 'https://koda.com',
      language: 'PHP',
    },
    {
      id: '3',
      name: 'Repo 3',
      desc: 'desc 3',
      html_url: 'https://koda.com',
      language: 'Ruby',
    },
    {
      id: '4',
      name: 'Repo 4',
      desc: 'desc 4',
      html_url: 'https://koda.com',
      language: 'Python',
    },
    {
      id: '5',
      name: 'Repo 5',
      desc: 'desc 5',
      html_url: 'https://koda.com',
      language: 'JavaScript',
    },
    {
      id: '6',
      name: 'Repo 6',
      desc: 'desc 6',
      html_url: 'https://koda.com',
      language: 'Ruby',
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
