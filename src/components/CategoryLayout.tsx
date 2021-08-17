import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

const CategoryLayout = ({ title, description, children }: Props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;
  `;

  const Header = styled.div`
    margin: 15px 0;
    text-align: center;
  `;

  const Body = styled.div``;
  return (
    <Container>
      <Header>
        <h2>{title}</h2>
        <p>{description}</p>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default CategoryLayout;
