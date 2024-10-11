import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { HomeModule } from '@/modules/home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from '@/styles/Home.module.css';

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], null, [
        'en',
        'ua',
        'ru',
      ])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Inrepublic</title>
        <meta name='description' content='Inrepublic' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeModule />
    </>
  );
}
