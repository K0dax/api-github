import React, { useState } from 'react';

import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';

import GithubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  const [login, setlogin] = useState('');
  return (
    <Container>
      <Logo src={GithubLogo} alt="Github logo" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onchange={(e) => setlogin(e.target.value)}
        />
        <Button>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
