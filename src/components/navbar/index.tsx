'use client';
import { useTranslation } from 'next-i18next';
import styles from './Navbar.module.css';
import Link from 'next/link';

export const Navbar = ({ scrollToTargetBlock }: any) => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.navbar}>
      <a
        className={styles.link}
        onClick={() => {
          scrollToTargetBlock('whoWeAre');
        }}
      >
        {t('who_we_are')}
      </a>
      <a
        className={styles.link}
        onClick={() => {
          scrollToTargetBlock('portfolio');
        }}
      >
        {t('portfolio')}
      </a>
      <a
        className={styles.link}
        onClick={() => {
          scrollToTargetBlock('getInTouch');
        }}
      >
        {t('get_in_touch')}
      </a>
    </div>
  );
};
