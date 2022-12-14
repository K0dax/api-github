import React from 'react';

import PropTypes from 'prop-types';

import { Container, Name, Description, Footer, Lang, Link } from './styles';

const Repository = ({ repository }) => (
  <Container color="#f37272">
    <Name>{repository.name}</Name>
    <Description>{repository.desc}</Description>
    <Footer color="#f37272">
      <Lang>{repository.language}</Lang>
      <Link href={repository.html_url} target="_blank">
        ver
      </Link>
    </Footer>
  </Container>
);

Repository.propTypes = {
  repository: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Repository;
