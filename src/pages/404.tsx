export async function getStaticProps(context) {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}

export default function Custom404() {
  return <></>;
}
