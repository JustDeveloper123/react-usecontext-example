import { Container, Footer, Header } from '@ui';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
