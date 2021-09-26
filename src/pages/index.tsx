import Head from 'next/head';
import AboutUsSection from '../components/AboutUsSection';
import BoxSection from '../components/BoxSection';
import CatalogSection from '../components/CatalogSection';
import ContactUs from '../components/ContactUsButton';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export const Home = () => (
  <>
    <Head>
      <title>Etimatic</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero />
    <BoxSection />
    <section id="products">
      <CatalogSection />
    </section>
    <section id="aboutus">
      <AboutUsSection />
    </section>
    <Footer />
    <ContactUs />
  </>
);

export default Home;
