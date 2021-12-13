import Head from 'next/head';
import Footer from '../components/Footer';
import AboutUsSection from '../components/main-page/AboutUsSection';
import BoxSection from '../components/main-page/BoxSection';
import CatalogSection from '../components/main-page/CatalogSection';
import ContactUs from '../components/main-page/ContactUsButton';
import Hero from '../components/main-page/Hero';

export function Index() {
  return (
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
      <section id="about_us">
        <AboutUsSection />
      </section>
      <Footer />
      <ContactUs />
    </>
  );
}

export default Index;
