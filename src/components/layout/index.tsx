import { Footer } from './footer';
import { Header } from './header';

export const Layout = ({ children }: any) => {
  return (
    <div
      style={{
        background: '#EDEEF0',
        height: '100vh',
        overflowY: 'scroll',
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
