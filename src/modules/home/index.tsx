import { ContactUs } from './components/contact-us';
import { Inrepublic } from './components/inrepublic';
import { Portfolio } from './components/portfolio';
import { Seller } from './components/seller';
import { Solo } from './components/solo';
import { SoloHard } from './components/solo-hard';
import { WhoWeAre } from './components/who-we-are';
import { Layout } from '@/components/layout';

export const HomeModule = () => {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          gap: '25px',
          flexDirection: 'column',
          padding: '25px 18px 50px',
        }}
      >
        <WhoWeAre />
        <Portfolio />
        <Solo />
        <Seller />
        <Inrepublic />
        <SoloHard />
        <ContactUs />
      </div>
    </Layout>
  );
};
