import styled from 'styled-components';
import Header from './Header';

const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Content = styled.div`
  flex: 1;
`;

const MainLayout = ({ children }: any) => {
  return (
    <App>
      <Header />
      <Main>
        <Content>{children}</Content>
      </Main>
    </App>
  );
};

export default MainLayout;
