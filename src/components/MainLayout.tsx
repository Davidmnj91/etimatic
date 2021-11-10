import Header from './Header';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
