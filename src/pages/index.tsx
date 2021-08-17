import Head from 'next/head';
import AboutUsSection from '../components/AboutUsSection';
import BoxSection from '../components/BoxSection';
import CatalogSection from '../components/CatalogSection';
import Hero from '../components/Hero';

export const Home = () => (
  <>
    <Head>
      <title>Etimatic</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero />
    <BoxSection />
    <CatalogSection />
    <AboutUsSection />
  </>
);

export default Home;
